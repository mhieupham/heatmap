
import { DESERIALIZE, SERIALIZE } from 'state/action_types';
import { getInitialState } from './get_initial_state';

export const withoutPersistence = reducer => {
    const wrappedReducer = ( state, action ) => {
        switch ( action.type ) {
            case SERIALIZE:
                return undefined;
            case DESERIALIZE:
                return getInitialState( reducer );
            default:
                return reducer( state, action );
        }
    };
    wrappedReducer.hasCustomPersistence = true;

    return wrappedReducer;
};
