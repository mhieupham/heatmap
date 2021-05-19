// import config from 'config';
import page from 'page';

import { makeLayout, render as clientRender } from 'controller';
import {
    preloadWhatIsHeatmapBundle,
    whatIsHeatmap,
} from './controller';


export default function() {
    page(
        '/heatmap-la-gi',
        preloadWhatIsHeatmapBundle,
        whatIsHeatmap,
        makeLayout,
        clientRender,
    );
}
