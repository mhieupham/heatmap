
import debugFactory from 'debug';
import page from 'page';
import { parse } from 'qs';
import url from 'url';
import { get, startsWith } from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import store from 'store';

import config from 'config';
import { hasTouch } from 'lib/touch_detect';
import { installPerfmonPageHandlers } from 'lib/perfmon';
import { setupRoutes } from 'sections_middleware';
import { getSiteFragment, normalize } from 'lib/route';
import { isLegacyRoute } from 'lib/route/legacy_routes';
import { setReduxStore as setReduxBridgeReduxStore } from 'lib/redux_bridge';

import { setRoute as setRouteAction } from 'state/ui/actions';

// We need to require sections to load React with i18n mixin
const loadSectionsMiddleware = () => setupRoutes();

const setRouteMiddleware = () => {
    page( '*', ( context, next ) => {
        context.store.dispatch( setRouteAction( context.pathname, context.query ) );

        next();
    } );
};

const setupContextMiddleware = reduxStore => {
    page( '*', ( context, next ) => {
        const parsed = url.parse( context.canonicalPath, true );
        context.prevPath = parsed.path === context.path ? false : parsed.path;
        context.query = parsed.query;

        context.hashstring = ( parsed.hash && parsed.hash.substring( 1 ) ) || '';
        // set `context.hash` (we have to parse manually)
        if ( context.hashstring ) {
            try {
                context.hash = parse( context.hashstring );
            } catch ( e ) {
                debug( 'failed to query-string parse `location.hash`', e );
                context.hash = {};
            }
        } else {
            context.hash = {};
        }

        context.store = reduxStore;

        // client version of the isomorphic method for redirecting to another page
        context.redirect = ( httpCode, newUrl = null ) => {
            if ( isNaN( httpCode ) && ! newUrl ) {
                newUrl = httpCode;
            }

            return page.replace( newUrl, context.state, false, false );
        };

        next();
    } );

    page.exit( '*', ( context, next ) => {
        if ( ! context.store ) {
            context.store = reduxStore;
        }
        next();
    } );
}

export const configureReduxStore = ( currentUser, reduxStore ) => {
    setReduxBridgeReduxStore( reduxStore );
}

export const setupMiddlewares = ( currentUser, reduxStore ) => {
    // debug( 'Executing Calypso setup middlewares.' );

    installPerfmonPageHandlers();
    setupContextMiddleware( reduxStore );
    // oauthTokenMiddleware();
    // loggedOutMiddleware( currentUser );
    loadSectionsMiddleware();
    setRouteMiddleware();
    // clearNoticesMiddleware();
    // unsavedFormsMiddleware();
};