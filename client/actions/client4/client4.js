
import config from 'config';
import {buildQueryString} from './utils';

const HEADER_AUTH = 'Authorization';
const HEADER_BEARER = 'BEARER';
const HEADER_REQUESTED_WITH = 'X-Requested-With';
const HEADER_USER_AGENT = 'User-Agent';
const HEADER_X_CLUSTER_ID = 'X-Cluster-Id';
const HEADER_X_CSRF_TOKEN = 'X-CSRF-Token';
export const HEADER_X_VERSION_ID = 'X-Version-Id';

const PER_PAGE_DEFAULT = 60;
const LOGS_PER_PAGE_DEFAULT = 10000;

export default class Client4 {
    constructor() {
        this.logToConsole = false;
        this.serverVersion = '';
        this.clusterId = '';
        this.token = '';
        this.csrf = '';
        this.url = config('api_url');
        this.urlVersion = '/api/v4';
        this.userAgent = null;
        this.enableLogging = false;
        this.defaultHeaders = {};
        this.userId = '';
        this.diagnosticId = '';
        this.includeCookies = true;

        this.translations = {
            connectionError: 'There appears to be a problem with your internet connection.',
            unknownError: 'We received an unexpected status code from the server.',
        };

        this.setAcceptLanguage('vi-VN');
    }

    setAcceptLanguage(locale) {
        this.defaultHeaders['Accept-Language'] = locale;
    }

    setCSRF(csrfToken) {
        this.csrf = csrfToken;
    }

    setUserId(userId) {
        this.userId = userId;
    }

    getUrl() {
        return this.url;
    }

    getBaseRoute() {
        return `${this.url}${this.urlVersion}`;
    }

    getUsersRoute() {
        return `${this.getBaseRoute()}/users`;
    }

    checkEmailExist = async (data) => {
        return this.doFetch(
            `${this.getUsersRoute()}/check_email`,
            {method: 'post', body: JSON.stringify(data)}
        );
    };

    checkUsernameExist = async (data) => {
        return this.doFetch(
            `${this.getUsersRoute()}/check_username`,
            {method: 'post', body: JSON.stringify(data)}
        );
    };

    checkPasswordValid = async (data) => {
        return this.doFetch(
            `${this.getUsersRoute()}/check_password`,
            {method: 'post', body: JSON.stringify(data)}
        );
    };

    createUser = async (user, token, inviteId) => {
        const queryParams = {};

        if (token) {
            queryParams.t = token;
        }

        if (inviteId) {
            queryParams.iid = inviteId;
        }

        return this.doFetch(
            `${this.getUsersRoute()}${buildQueryString(queryParams)}`,
            {method: 'post', body: JSON.stringify(user)}
        );
    };

    login = async (loginId, password, token = '', deviceId = '', ldapOnly = false) => {
        const body = {
            device_id: deviceId,
            login_id: loginId,
            password,
            token,
        };

        if (ldapOnly) {
            body.ldap_only = 'true';
        }

        const {data} = await this.doFetchWithResponse(
            `${this.getUsersRoute()}/login`,
            {method: 'post', body: JSON.stringify(body)}
        );

        return data;
    };

    getTranslations = async (url) => {
        return this.doFetch(
            url,
            {method: 'get'}
        );
    };

    doFetch = async (url, options) => {
        const {data} = await this.doFetchWithResponse(url, options);
        return data;
    };

    getOptions(options) {
        const newOptions = Object.assign({}, options);

        const headers = {
            [HEADER_REQUESTED_WITH]: 'XMLHttpRequest',
            ...this.defaultHeaders,
        };

        if (this.token) {
            headers[HEADER_AUTH] = `${HEADER_BEARER} ${this.token}`;
        }

        if (options.method && options.method.toLowerCase() !== 'get' && this.csrf) {
            headers[HEADER_X_CSRF_TOKEN] = this.csrf;
        }

        if (this.includeCookies) {
            newOptions.credentials = 'include';
        }

        if (this.userAgent) {
            headers[HEADER_USER_AGENT] = this.userAgent;
        }

        if (newOptions.headers) {
            Object.assign(headers, newOptions.headers);
        }

        return {
            ...newOptions,
            headers,
        };
    }

    doFetchWithResponse = async (url, options) => {
        const response = await fetch(url, this.getOptions(options));
        const headers = parseAndMergeNestedHeaders(response.headers);

        let data;
        try {
            data = await response.json();
        } catch (err) {
            throw new ClientError(this.getUrl(), {
                message: 'Received invalid response from the server.',
                intl: {
                    id: 'mobile.request.invalid_response',
                    defaultMessage: 'Received invalid response from the server.',
                },
                url,
            });
        }

        if (headers.has(HEADER_X_VERSION_ID) && !headers.get('Cache-Control')) {
            const serverVersion = headers.get(HEADER_X_VERSION_ID);
            if (serverVersion && this.serverVersion !== serverVersion) {
                this.serverVersion = serverVersion;
            }
        }

        if (headers.has(HEADER_X_CLUSTER_ID)) {
            const clusterId = headers.get(HEADER_X_CLUSTER_ID);
            if (clusterId && this.clusterId !== clusterId) {
                this.clusterId = clusterId;
            }
        }

        if (response.ok) {
            return {
                response,
                headers,
                data,
            };
        }

        const msg = data.message || '';

        if (this.logToConsole) {
            console.error(msg); // eslint-disable-line no-console
        }

        throw new ClientError(this.getUrl(), {
            message: msg,
            server_error_id: data.id,
            status_code: data.status_code,
            url,
        });
    };
}

function parseAndMergeNestedHeaders(originalHeaders) {
    const headers = new Map();
    let nestedHeaders = new Map();
    originalHeaders.forEach((val, key) => {
        const capitalizedKey = key.replace(/\b[a-z]/g, (l) => l.toUpperCase());
        let realVal = val;
        if (val && val.match(/\n\S+:\s\S+/)) {
            const nestedHeaderStrings = val.split('\n');
            realVal = nestedHeaderStrings.shift();
            const moreNestedHeaders = new Map(
                nestedHeaderStrings.map((h) => h.split(/:\s/))
            );
            nestedHeaders = new Map([...nestedHeaders, ...moreNestedHeaders]);
        }
        headers.set(capitalizedKey, realVal);
    });
    return new Map([...headers, ...nestedHeaders]);
}

export class ClientError extends Error {
    constructor(baseUrl, data) {
        super(data.message);

        this.message = data.message;
        this.url = data.url;
        this.intl = data.intl;
        this.server_error_id = data.server_error_id;
        this.status_code = data.status_code;

        // Ensure message is treated as a property of this class when object spreading. Without this,
        // copying the object by using `{...error}` would not include the message.
        Object.defineProperty(this, 'message', {enumerable: true});
    }
}
