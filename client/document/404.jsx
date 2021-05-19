/**
 * External dependencies
 *
 * @format
 */

import React from 'react';

/**
 * Internal dependencies
 */
import config from 'config';
import Head from 'components/head';

// import EmptyContent from 'components/empty-content';
import Footer from 'layout/footer';
import { chunkCssLinks } from './utils';

function NotFound( { faviconURL, entrypoint, isRTL } ) {
    return (
        <html lang="en">
        <Head faviconURL={ faviconURL } cdn={ config( 'site_url' ) }>
            { chunkCssLinks( entrypoint, isRTL ) }
        </Head>
        <body>
        { /* eslint-disable wpcalypso/jsx-classname-namespace*/ }
        <div id="heatmap" className="heatmap-site">
            <div className="lf has-no-sidebar">
                <div className="layout__content" id="content">
                    <div className="layout__primary" id="primary">
                        Trang bạn yêu cầu không tồn tại.
                    </div>
                </div>
            </div>
            <Footer theme='white'/>
        </div>
        { /* eslint-enable wpcalypso/jsx-classname-namespace*/ }
        </body>
        </html>
    );
}

export default NotFound;
