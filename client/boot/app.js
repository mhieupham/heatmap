/** @format */
// Initialize polyfills before any dependencies are loaded
import './polyfills';

/**
 * External dependencies
 */
import debugFactory from 'debug';
import page from 'page';

/**
 * Internal dependencies
 */
import { configureReduxStore, locales, setupMiddlewares, utils } from './common';
import { createReduxStore } from 'state';
import initialReducer from 'state/reducer';
import { getInitialState, persistOnChange } from 'state/initial_state';
import detectHistoryNavigation from 'lib/detect_history_navigation';

/**
 * Style dependencies
 */
import 'assets/stylesheets/style.scss';

const debug = debugFactory( 'heatmap' );

const boot = () => {
    debug( "Starting heatmap. Let's do this." );

    getInitialState( initialReducer ).then( initialState => {
        const reduxStore = createReduxStore( initialState, initialReducer );
        persistOnChange( reduxStore );
        configureReduxStore( null, reduxStore );
        setupMiddlewares( null, reduxStore );
        detectHistoryNavigation.start();
        page.start( { decodeURLComponents: false } );
    } );
};

window.AppBoot = () => {
    boot();
};
