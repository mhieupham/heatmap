
import React from 'react';
import page from 'page';

import { preload } from 'sections_helper';

import Features from './content';

const exported = {
    preloadFeaturesBundle( context, next ) {
        preload( 'features' );
        next();
    },

    features( context, next ) {
        context.primary = React.createElement( Features, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadFeaturesBundle,
    features,
} = exported;