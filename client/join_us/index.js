// import config from 'config';
import page from 'page';

import { makeLayout, render as clientRender } from 'controller';
import {
    preloadJoinUsBundle,
    joinUs,
} from './controller';


export default function() {
    page(
        '/join-us',
        preloadJoinUsBundle,
        joinUs,
        makeLayout,
        clientRender,
    );
}
