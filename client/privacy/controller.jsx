
import React from 'react';

import { preload } from 'sections_helper';

import Privacy from './content';

const exported = {
    preloadPrivacyBundle( context, next ) {
        preload( 'privacy' );
        next();
    },

    privacy( context, next ) {
        context.primary = React.createElement( Privacy, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadPrivacyBundle,
    privacy,
} = exported;
