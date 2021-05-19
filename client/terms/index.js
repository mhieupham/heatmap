// import config from 'config';
import page from 'page';

import { makeLayout, render as clientRender } from 'controller';
import {
    preloadTermsBundle,
    terms,
} from './controller';


export default function() {
    page(
        '/terms',
        preloadTermsBundle,
        terms,
        makeLayout,
        clientRender,
    );
}
