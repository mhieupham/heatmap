
import React from 'react';
import page from 'page';

import { preload } from 'sections_helper';

import HomeContent from './content';

const exported = {
    preloadHomeBundle( context, next ) {
        preload( 'home' );
        next();
    },

    home( context, next ) {
        context.primary = React.createElement( HomeContent, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadHomeBundle,
    home,
} = exported;