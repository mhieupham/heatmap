/**
 * External dependencies
 */
import { merge } from 'lodash';

/**
 * Given an action object or thunk, returns an updated object or thunk which
 * will include additional data in the action (as provided) when dispatched.
 *
 * @param  {(Function|Object)} action Action object or thunk
 * @param  {Object}            data   Additional data to include in action
 * @return {(Function|Object)}        Augmented action object or thunk
 * @see client/state/utils/withEnhancers for a more advanced alternative
 */
export function extendAction( action, data ) {
    if ( 'function' !== typeof action ) {
        return merge( {}, action, data );
    }

    return ( dispatch, getState ) => {
        const newDispatch = a => dispatch( extendAction( a, data ) );
        return action( newDispatch, getState );
    };
}
