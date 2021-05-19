
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import initialReducer from './reducer';


const addReducerEnhancer = nextCreator => ( reducer, initialState ) => {
    const nextStore = nextCreator( reducer, initialState );

    let currentReducer = reducer;
    function addReducer( keys, subReducer ) {
        currentReducer = currentReducer.addReducer( keys, subReducer );
        this.replaceReducer( currentReducer );
    }

    function getCurrentReducer() {
        return currentReducer;
    }

    return Object.assign( {}, nextStore, { addReducer, getCurrentReducer } );
};

export function createReduxStore( initialState, reducer = initialReducer ) {
    const isBrowser = typeof window === 'object';
    const isAudioSupported = typeof window === 'object' && typeof window.Audio === 'function';

    const middlewares = [
        thunkMiddleware,
    ].filter( Boolean );

    const enhancers = [
        addReducerEnhancer,
        applyMiddleware( ...middlewares ),
        isBrowser && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ].filter( Boolean );

    return createStore( reducer, initialState, compose( ...enhancers ) );
}