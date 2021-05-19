export function getInitialState( reducer ) {
    return reducer( undefined, { type: '@@heatmap/INIT' } );
}
