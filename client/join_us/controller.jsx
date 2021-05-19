
import React from 'react';

import { preload } from 'sections_helper';

import JoinUs from './content';

const exported = {
    preloadJoinUsBundle( context, next ) {
        preload( 'joinUs' );
        next();
    },

    joinUs( context, next ) {
        context.primary = React.createElement(JoinUs, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadJoinUsBundle,
    joinUs,
} = exported;
