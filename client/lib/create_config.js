// Copyright (c) 2018-present heatmap All Rights Reserved.
// See LICENSE.txt for license information.

const config = data => key => {
    if (key in data) {
        return data[key];
    }

    if ('development' === process.env.NODE_ENV) {
        throw new ReferenceError(
            `Could not find config value for key '${ key }'\n` +
            "Please make sure that if you need it then it has a default value assigned in 'config/_shared.json'"
        );
    }

    // display console error only in a browser
    // (not in tests, for example)
    if ('undefined' !== typeof window) {
        console.error(
            //eslint-disable-line no-console
            '%cCore Error: ' +
            '%cCould not find config value for key %c${ key }%c. ' +
            'Please make sure that if you need it then it has a default value assigned in ' +
            '%cconfig/_shared.json' +
            '%c.',
            'color: red; font-size: 120%', // error prefix
            'color: black;', // message
            'color: blue;', // key name
            'color: black;', // message
            'color: blue;', // config file reference
            'color: black' // message
        );
    }
};

const isEnabled = data => feature => (data.features && !! data.features[feature]) || false;

module.exports = data => {
    const configApi = config( data );
    configApi.isEnabled = isEnabled( data );

    return configApi;
};
