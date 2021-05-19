// import config from 'config';
import page from 'page';

import { makeLayout, render as clientRender } from 'controller';
import {
    preloadPricingBundle,
    pricing,
} from './controller';


export default function() {
    page(
        '/pricing',
        preloadPricingBundle,
        pricing,
        makeLayout,
        clientRender,
    );
}