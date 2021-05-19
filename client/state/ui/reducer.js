/**
 * Internal dependencies
 */
import {
    SELECTED_SITE_SET,
    SECTION_SET,
    PREVIEW_IS_SHOWING,
    NOTIFICATIONS_PANEL_TOGGLE,
} from 'state/action_types';
import { combineReducers, withoutPersistence } from 'state/utils';

import route from './route/reducer';
import section from './section/reducer';

const reducer = combineReducers( {
    route,
    section,
} );

export default reducer;