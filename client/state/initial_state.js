
import debugModule from 'debug';
import { get, map, pick, throttle } from 'lodash';

import config from 'config';

const debug = debugModule( 'calypso:state' );

import { APPLY_STORED_STATE, SERIALIZE, DESERIALIZE } from 'state/action_types';
import { getStoredItem, setStoredItem, clearStorage } from 'lib/browser_storage';

const DAY_IN_HOURS = 24;
const HOUR_IN_MS = 3600000;
export const SERIALIZE_THROTTLE = 5000;
export const MAX_AGE = 7 * DAY_IN_HOURS * HOUR_IN_MS;

function serialize( state, reducer ) {
    return reducer( state, { type: SERIALIZE } );
}

function deserialize( state, reducer ) {
    delete state._timestamp;
    return reducer( state, { type: DESERIALIZE } );
}

// get bootstrapped state from a server-side render
function getInitialServerState( initialReducer ) {
    if ( typeof window !== 'object' || ! window.initialReduxState || /*isSupportSession()*/false ) {
        return null;
    }

    const serverState = deserialize( window.initialReduxState, initialReducer );
    return pick( serverState, Object.keys( window.initialReduxState ) );
}

function shouldPersist() {
    return config.isEnabled( 'persist-redux' );
}

function verifyStoredRootState( state ) {
    const currentUserId = get( {}, 'ID', null );
    const storedUserId = get( state, [ 'currentUser', 'id' ], null );

    if ( currentUserId !== storedUserId ) {
        debug( `current user ID=${ currentUserId } and state user ID=${ storedUserId } don't match` );
        return false;
    }

    return true;
}

function verifyStateTimestamp( state ) {
    return state._timestamp && state._timestamp + MAX_AGE > Date.now();
}

export async function getStateFromLocalStorage( reducer, subkey, forceLoggedOutUser = false ) {
    const reduxStateKey = getReduxStateKey( forceLoggedOutUser ) + ( subkey ? ':' + subkey : '' );

    try {
        const storedState = await getStoredItem( reduxStateKey );
        debug( 'fetched stored Redux state from persistent storage', storedState );

        if ( storedState === null ) {
            debug( 'stored Redux state not found in persistent storage' );
            return null;
        }

        if ( ! verifyStateTimestamp( storedState ) ) {
            debug( 'stored Redux state is too old, dropping' );
            return null;
        }

        const deserializedState = deserialize( storedState, reducer );
        if ( ! deserializedState ) {
            debug( 'stored Redux state failed to deserialize, dropping' );
            return null;
        }

        if ( ! subkey && ! verifyStoredRootState( deserializedState ) ) {
            debug( 'stored root Redux state has invalid currentUser.id, dropping' );
            return null;
        }

        return deserializedState;
    } catch ( error ) {
        debug( 'error while loading stored Redux state:', error );
        return null;
    }
}

function shouldAddSympathy() {
    // If `force-sympathy` flag is enabled, always clear persistent state.
    if ( config.isEnabled( 'force-sympathy' ) ) {
        return true;
    }

    // If `no-force-sympathy` flag is enabled, never clear persistent state.
    if ( config.isEnabled( 'no-force-sympathy' ) ) {
        return false;
    }

    // Otherwise, in development mode, clear persistent state 25% of the time.
    if ( 'development' === process.env.NODE_ENV && Math.random() < 0.25 ) {
        return true;
    }

    // Otherwise, do not clear persistent state.
    return false;
}

function getReduxStateKey( forceLoggedOutUser = false ) {
    return getReduxStateKeyForUserId( null );
}

function getReduxStateKeyForUserId( userId ) {
    if ( ! userId ) {
        return 'redux-state-logged-out';
    }
    return 'redux-state-' + userId;
}

function isValidReduxKeyAndState( key, state ) {
    // When the current user is changed (for example via logout) the previous
    // user's state remains in memory until the page refreshes. To prevent this
    // outdated state from being written to the new user's local storage, it is
    // necessary to check that the user IDs match. (This check can be removed
    // only if all places in the code that change the current user are also
    // able to force the state in memory to be rebuilt - possibly using
    // https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992
    // - without generating any errors. Until then, it must remain in place.)
    const userId = null; // get( state, [ 'currentUser', 'id' ], null );
    return key === getReduxStateKeyForUserId( userId );
}

function persistentStoreState( reduxStateKey, storageKey, state, _timestamp ) {
    if ( storageKey !== 'root' ) {
        reduxStateKey += ':' + storageKey;
    }

    return setStoredItem( reduxStateKey, Object.assign( {}, state, { _timestamp } ) );
}

export function persistOnChange( reduxStore ) {
    if ( ! shouldPersist() ) {
        return;
    }

    let prevState = null;

    const throttledSaveState = throttle(
        function() {
            const state = reduxStore.getState();
            if ( state === prevState ) {
                return;
            }

            const reduxStateKey = getReduxStateKey();
            if ( ! isValidReduxKeyAndState( reduxStateKey, state ) ) {
                return;
            }

            prevState = state;

            const serializedState = serialize( state, reduxStore.getCurrentReducer() );
            const _timestamp = Date.now();

            const storeTasks = map( serializedState.get(), ( data, storageKey ) =>
                persistentStoreState( reduxStateKey, storageKey, data, _timestamp )
            );

            Promise.all( storeTasks ).catch( setError =>
                debug( 'failed to set redux-store state', setError )
            );
        },
        SERIALIZE_THROTTLE,
        { leading: false, trailing: true }
    );

    if ( typeof window !== 'undefined' ) {
        window.addEventListener( 'beforeunload', throttledSaveState.flush );
    }

    reduxStore.subscribe( throttledSaveState );
}

async function getInitialStoredState( initialReducer ) {
    if ( ! shouldPersist() ) {
        return null;
    }

    if ( 'development' === process.env.NODE_ENV ) {
        window.resetState = () => clearStorage().then( () => location.reload( true ) );

        if ( shouldAddSympathy() ) {
            // eslint-disable-next-line no-console
            console.log(
                '%cSkipping initial state rehydration. (This runs during random page requests in the heatmap development environment, to simulate loading the application with an empty cache.)',
                'font-size: 14px; color: red;'
            );

            clearStorage();
            return null;
        }
    }

    let initialStoredState = await getStateFromLocalStorage( initialReducer );
    const storageKeys = [ ...initialReducer.getStorageKeys() ];

    async function loadReducerState( { storageKey, reducer } ) {
        let storedState = await getStateFromLocalStorage( reducer, storageKey, false );

        if ( ! storedState && storageKey === 'signup' ) {
            storedState = await getStateFromLocalStorage( reducer, storageKey, true );
            debug( 'fetched signup state from logged out state', storedState );
        }

        if ( storedState ) {
            initialStoredState = initialReducer( initialStoredState, {
                type: APPLY_STORED_STATE,
                storageKey,
                storedState,
            } );
        }
    }

    await Promise.all( map( storageKeys, loadReducerState ) );

    return initialStoredState;
}

export async function getInitialState( initialReducer ) {
    const storedState = await getInitialStoredState( initialReducer );
    const serverState = getInitialServerState( initialReducer );
    return { ...storedState, ...serverState };
}