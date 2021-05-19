
import React from 'react';

import { preload } from 'sections_helper';

import Help from './content';

const exported = {
    preloadHelpBundle( context, next ) {
        preload( 'help' );
        next();
    },

    help( context, next ) {
        context.primary = React.createElement( Help, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadHelpBundle,
    help,
} = exported;