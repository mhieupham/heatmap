// import config from 'config';
import page from 'page';

import { makeLayout, render as clientRender } from 'controller';
import {
    preloadHelpBundle,
    help,
} from './controller';


export default function() {
    page(
        '/help',
        preloadHelpBundle,
        help,
        makeLayout,
        clientRender,
    );
}