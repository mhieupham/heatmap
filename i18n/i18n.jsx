// Copyright (c) 2019-present heatmap, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {addLocaleData} from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';

import vnLocaleData from 'react-intl/locale-data/vi';

const viVN = require('./vi-VN.json');

// should match the values in model/config.go
const languages = {
    en: {
        value: 'en',
        name: 'English',
        order: 1,
        url: '',
    },
    'vi-VN': {
        value: 'vi-VN',
        name: 'Tiếng Việt',
        order: 12,
        url: viVN,
    },
};

export function getAllLanguages() {
    return languages;
}

export function getLanguages() {
    return getAllLanguages();
}

export function getLanguageInfo(locale) {
    return getAllLanguages()[locale];
}

export function isLanguageAvailable(locale) {
    return Boolean(getLanguages()[locale]);
}

export function safariFix(callback) {
    require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js',
        'intl/locale-data/jsonp/vi.js',
    ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/en.js');

        require('intl/locale-data/jsonp/vi.js');
        callback();
    });
}

export function doAddLocaleData() {
    addLocaleData(enLocaleData);
    addLocaleData(vnLocaleData);
}
