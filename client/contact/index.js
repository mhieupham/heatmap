// import config from 'config';
import page from 'page';

import { makeLayout, render as clientRender } from 'controller';
import {
    preloadContactBundle,
    contact,
} from './controller';


export default function() {
    page(
        '/contact',
        preloadContactBundle,
        contact,
        makeLayout,
        clientRender,
    );
}
