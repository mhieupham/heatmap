/**
 * External dependencies
 *
 * @format
 */

import React from 'react';

/**
 * Internal dependencies
 */
import Head from 'components/head';
// import EmptyContent from 'components/empty-content';
import { chunkCssLinks } from './utils';

function ServerError( { faviconURL, entrypoint, isRTL } ) {
    return (
        <html lang="en">
        <Head faviconURL={ faviconURL } cdn={ '//s1.wp.com' }>
            { chunkCssLinks( entrypoint, isRTL ) }
        </Head>
        <body>
        { /* eslint-disable wpcalypso/jsx-classname-namespace*/ }
        <div id="wpcom" className="wpcom-site">
            <div className="wp has-no-sidebar">
                <div className="layout__content" id="content">
                    <div className="layout__primary" id="primary">
                        Server error
                    </div>
                </div>
            </div>
        </div>
        { /* eslint-enable wpcalypso/jsx-classname-namespace*/ }
        </body>
        </html>
    );
}

export default ServerError;
