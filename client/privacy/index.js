// import config from 'config';
import page from 'page';

import { makeLayout, render as clientRender } from 'controller';
import {
    preloadPrivacyBundle,
    privacy,
} from './controller';


export default function() {
    page(
        '/privacy',
        preloadPrivacyBundle,
        privacy,
        makeLayout,
        clientRender,
    );
}
