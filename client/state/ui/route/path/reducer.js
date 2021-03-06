/** @format */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { ROUTE_SET } from 'state/action_types';

const initialState = {
    initial: '',
    current: '',
    previous: '',
};

export const pathReducer = ( state = initialState, action ) => {
    const { path, type } = action;
    switch ( type ) {
        case ROUTE_SET:
            return {
                initial: state.initial === '' ? path : state.initial,
                current: path,
                previous: state.current === '' ? '' : state.current,
            };
    }
    return state;
};

export default pathReducer;
