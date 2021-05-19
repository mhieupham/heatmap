
import React from 'react';

import { preload } from 'sections_helper';

import Terms from './content';

const exported = {
    preloadTermsBundle( context, next ) {
        preload( 'privacy' );
        next();
    },

    terms( context, next ) {
        context.primary = React.createElement( Terms, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadTermsBundle,
    terms,
} = exported;
