// import config from 'config';
import page from 'page';

import { makeLayout, render as clientRender } from 'controller';
import {
    preloadFeaturesBundle,
    features,
} from './controller';


export default function() {
    page(
        '/features',
        preloadFeaturesBundle,
        features,
        makeLayout,
        clientRender,
    );
}