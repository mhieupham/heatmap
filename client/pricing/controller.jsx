
import React from 'react';

import { preload } from 'sections_helper';

import Pricing from './content';

const exported = {
    preloadPricingBundle( context, next ) {
        preload( 'pricing' );
        next();
    },

    pricing( context, next ) {
        context.primary = React.createElement( Pricing, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadPricingBundle,
    pricing,
} = exported;