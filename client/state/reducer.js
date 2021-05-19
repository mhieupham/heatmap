
import { combineReducers } from 'state/utils';

import documentHead from './document_head/reducer';
import i18n from './i18n/reducer';
import ui from './ui/reducer';
import view from './view/reducer';

const reducers = {
    documentHead,
    i18n,
    ui,
    view,
};

export default combineReducers( reducers );
