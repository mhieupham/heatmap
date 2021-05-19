import {Client4} from '../client4';
import vi from '../../../i18n/vi-VN.json';

import {
    RECEIVED_TRANSLATIONS,
} from 'state/action_types';

export function loadTranslations(locale, url) {
    console.log('called');
    return (dispatch) => {
        const translations = {};

        // No need to go to the server for VI
        if (locale === 'vi') {
            Object.assign(translations, vi);
            dispatch({
                type: RECEIVED_TRANSLATIONS,
                data: {
                    locale,
                    translations,
                },
            });
            return;
        }

        Client4.getTranslations(url).then((serverTranslations) => {
            Object.assign(translations, serverTranslations);
            dispatch({
                type: RECEIVED_TRANSLATIONS,
                data: {
                    locale,
                    translations,
                },
            });
        }).catch(() => {}); // eslint-disable-line no-empty-function
    };
}
