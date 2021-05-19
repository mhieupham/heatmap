
import React from 'react';

import { preload } from 'sections_helper';

import Contact from './content';

const exported = {
    preloadContactBundle( context, next ) {
        preload( 'contact' );
        next();
    },

    contact( context, next ) {
        context.primary = React.createElement( Contact, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadContactBundle,
    contact,
} = exported;
