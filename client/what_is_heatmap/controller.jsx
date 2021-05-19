
import React from 'react';

import { preload } from 'sections_helper';

import WhatIsHeatmap from './content';

const exported = {
    preloadWhatIsHeatmapBundle( context, next ) {
        preload( 'whatIsHeatmap' );
        next();
    },

    whatIsHeatmap( context, next ) {
        context.primary = React.createElement(WhatIsHeatmap, {
            path: context.path,
        } );

        next();
    },
};

export const {
    preloadWhatIsHeatmapBundle,
    whatIsHeatmap,
} = exported;
