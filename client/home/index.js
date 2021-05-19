// import config from 'config';
import page from 'page';

/**
 * Internal dependencies
 */
import { makeLayout, render as clientRender } from 'controller';
import {
    preloadHomeBundle,
    home,
} from './controller';


export default function() {
    page(
        '/',
        preloadHomeBundle,
        home,
        makeLayout,
        clientRender,
    );
}