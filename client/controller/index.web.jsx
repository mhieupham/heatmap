
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import page from 'page';

import { makeLayoutMiddleware } from './shared';
import { hydrate } from './utils.js';

export { render, hydrate } from './utils.js';
import MainLayout from 'layout/main_layout';

export function clientRouter( route, ...middlewares ) {
    page( route, ...middlewares, hydrate );
}

export const ReduxWrappedLayout = ( { store, primary, secondary, redirectUri } ) => {
    const state = store.getState();

    return (
        <ReduxProvider store={ store }>
            <MainLayout
                primary={ primary }
                secondary={ secondary }
                redirectUri={ redirectUri }
            />
        </ReduxProvider>
    );
};

export const makeLayout = makeLayoutMiddleware( ReduxWrappedLayout );


export function redirectLoggedOut( context, next ) {
    next();
}