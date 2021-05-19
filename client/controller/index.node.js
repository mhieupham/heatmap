/**
 * External dependencies
 */
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

/**
 * Internal dependencies
 */
import { makeLayoutMiddleware } from './shared';
import MainLayout from 'layout/main_layout';

/**
 * Re-export
 */
export { setSection } from './shared';

const ReduxWrappedLoggedOutLayout = ( { store, primary, secondary, redirectUri } ) => (
    <ReduxProvider store={ store }>
        <MainLayout primary={ primary } secondary={ secondary } redirectUri={ redirectUri } />
    </ReduxProvider>
);

/**
 * @param { object } context -- Middleware context
 * @param { function } next -- Call next middleware in chain
 *
 * Produce a `LayoutLoggedOut` element in `context.layout`, using
 * `context.primary` and `context.secondary` to populate it.
 */
export const makeLayout = makeLayoutMiddleware( ReduxWrappedLoggedOutLayout );

export function redirectLoggedIn( { isLoggedIn, res }, next ) {
    // TODO: Make it work also for development env
    if ( isLoggedIn ) {
        res.redirect( '/' );
        return;
    }

    next();
}
