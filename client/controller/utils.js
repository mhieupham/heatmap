
import ReactDom from 'react-dom';
import page from 'page';

export function render( context ) {
    ReactDom.render( context.layout, document.getElementById( 'heatmap' ) );
}

export function hydrate( context ) {
    ReactDom.hydrate( context.layout, document.getElementById( 'heatmap' ) );
}
