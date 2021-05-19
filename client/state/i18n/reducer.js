// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {combineReducers} from 'redux';

import {RECEIVED_TRANSLATIONS} from 'state/action_types';

function translations(state = {}, action) {
    switch (action.type) {
        case RECEIVED_TRANSLATIONS:
            return {
                ...state,
                [action.data.locale]: action.data.translations,
            };

        default:
            return state;
    }
}

export default combineReducers({
    translations,
});
