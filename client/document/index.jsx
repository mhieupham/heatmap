import React, { Fragment } from 'react';
import classNames from 'classnames';

import config from 'config';
import Head from 'components/head';
import { chunkCssLinks } from './utils';
import { jsonStringifyForHtml } from '../../server/sanitize';

class Document extends React.Component {
    render() {
        const {
            app,
            chunkFiles,
            commitSha,
            buildTimestamp,
            faviconURL,
            head,
            i18nLocaleScript,
            initialReduxState,
            isRTL,
            entrypoint,
            manifest,
            lang,
            languageRevisions,
            renderedLayout,
            user,
            hasSecondary,
            sectionGroup,
            sectionName,
            clientData,
            isFluidWidth,
            env,
            badge,
            abTestHelper,
            preferencesHelper,
            branchName,
            commitChecksum,
            devDocs,
            devDocsURL,
            feedbackURL,
            inlineScriptNonce,
            isSupportSession,
            isWCComConnect,
            addEvergreenCheck,
            requestFrom,
        } = this.props;

        const inlineScript =
            (commitSha ? `var COMMIT_SHA = ${ jsonStringifyForHtml( commitSha ) };\n` : '') +
            (buildTimestamp ? `var BUILD_TIMESTAMP = ${ jsonStringifyForHtml( buildTimestamp ) };\n` : '') +
            ( user ? `var currentUser = ${ jsonStringifyForHtml( user ) };\n` : '' ) +
            ( isSupportSession ? 'var isSupportSession = true;\n' : '' ) +
            ( app ? `var app = ${ jsonStringifyForHtml( app ) };\n` : '' ) +
            ( initialReduxState
                ? `var initialReduxState = ${ jsonStringifyForHtml( initialReduxState ) };\n`
                : '' ) +
            ( clientData ? `var configData = ${ jsonStringifyForHtml( clientData ) };\n` : '' ) +
            ( languageRevisions
                ? `var languageRevisions = ${ jsonStringifyForHtml( languageRevisions ) };\n`
                : '' );

        const trackingUrl = config( 'tracking_url' );
        const trakingSiteId = config( 'tracking_site_id' );

        return (
            <html
                lang={ lang }
                dir={ isRTL ? 'rtl' : 'ltr' }
                className={ classNames( {
                    'is-fluid-width': isFluidWidth,
                    'is-iframe': sectionName === 'gutenberg-editor',
                } ) }
            >
            <Head
                title={ head ? head.title : 'heatmap.com' }
                faviconURL={ faviconURL }
                cdn={ config( 'site_url' ) }
                branchName={ branchName }
                inlineScriptNonce={ inlineScriptNonce }
            >
                { head.metas.map( ( props, index ) => (
                    <meta { ...props } key={ index } />
                ) ) }
                { head.links.map( ( props, index ) => (
                    <link { ...props } key={ index } />
                ) ) }
                { chunkCssLinks( entrypoint, isRTL ) }
                { chunkCssLinks( chunkFiles, isRTL ) }
            </Head>
            <body
                className={ classNames( {
                    rtl: isRTL,
                    'color-scheme': config.isEnabled( 'me/account/color-scheme-picker' ),
                    [ 'is-group-' + sectionGroup ]: sectionGroup,
                    [ 'is-section-' + sectionName ]: sectionName,
                } ) }
            >
            { /* eslint-disable heatmap/jsx-classname-namespace, react/no-danger */ }
            { renderedLayout ? (
                <div
                    id="heatmap"
                    className="heatmap-site"
                    dangerouslySetInnerHTML={ {
                        __html: renderedLayout,
                    } }
                />
            ) : (
                <div id="heatmap" className="heatmap-site">
                    <div
                        className={ classNames( 'layout', {
                            [ 'is-group-' + sectionGroup ]: sectionGroup,
                            [ 'is-section-' + sectionName ]: sectionName,
                            'is-wccom-oauth-flow': isWCComConnect,
                        } ) }
                    >
                        <div className="masterbar" />
                        <div className="layout__content"/>
                    </div>
                </div>
            ) }

            <script
                type="text/javascript"
                nonce={ inlineScriptNonce }
                dangerouslySetInnerHTML={ {
                    __html: inlineScript,
                } }
            />

            { // Use <script nomodule> to redirect browsers with no ES module
                // support to the fallback build. ES module support is a convenient
                // test to determine that a browser is modern enough to handle
                // the evergreen bundle.
                addEvergreenCheck && (
                    <script
                        nonce={ inlineScriptNonce }
                        noModule
                        dangerouslySetInnerHTML={ {
                            __html: `
							(function() {
								var url = window.location.href;

								if ( url.indexOf( 'forceFallback=1' ) === -1 ) {
									url += ( url.indexOf( '?' ) !== -1 ? '&' : '?' );
									url += 'forceFallback=1';
									window.location.href = url;
								}
							})();
							`,
                        } }
                    />
                ) }

            { env === 'development' && <script src="/heatmap/evergreen/manifest.js" /> }
            { env !== 'development' && (
                <script
                    nonce={ inlineScriptNonce }
                    dangerouslySetInnerHTML={ {
                        __html: manifest,
                    } }
                />
            ) }
            { entrypoint.js.map( asset => (
                <script key={ asset } src={ asset } />
            ) ) }
            { chunkFiles.js.map( chunk => (
                <script key={ chunk } src={ chunk } />
            ) ) }
            <script nonce={ inlineScriptNonce } type="text/javascript">
                window.AppBoot();
            </script>
            <script
                nonce={ inlineScriptNonce }
                dangerouslySetInnerHTML={ {
                    __html: `
						 (function() {
							if ( window.console && window.configData && 'development' !== window.configData.env ) {
								console.log( "%cSTOP!", "color:#f00;font-size:xx-large" );
								console.log(
									"%cWait! This browser feature runs code that can alter your website or its security, " +
									"and is intended for developers. If you've been told to copy and paste something here " +
									"to enable a feature, someone may be trying to compromise your account. Please make " +
									"sure you understand the code and trust the source before adding anything here.",
									"font-size:large;"
								);
							}
						})();
						 `,
                } }
            />
            <script
                nonce={ inlineScriptNonce }
                dangerouslySetInnerHTML={ {
                    __html: `
							if ('serviceWorker' in navigator) {
								window.addEventListener('load', function() {
									navigator.serviceWorker.register('/service_worker.js');
								});
							}
						 `,
                } }
            />
            <script
                nonce={ inlineScriptNonce }
                dangerouslySetInnerHTML={ {
                    __html: `
							if ('serviceWorker' in navigator) {
								window.addEventListener('load', function() {
									navigator.serviceWorker.register('/service_worker.js');
								});
							}
						 `,
                } }
            />
            {
                config.isEnabled( 'enable-tracking' ) && (
                    <script
                        nonce={ inlineScriptNonce }
                        dangerouslySetInnerHTML={ {
                            __html: `
							(function(l,a,d,i,f,r){
                                l.lf=l.lf||function(){(l.lf.q=l.lf.q||[]).push(arguments)};
                                l._lfSettings={lfid:${trakingSiteId},lfsv:1};
                                f=a.getElementsByTagName('head')[0];
                                r=a.createElement('script');r.async=1;
                                r.src=d+l._lfSettings.lfid+i+l._lfSettings.lfsv;
                                f.appendChild(r);
                            })(window,document,'${trackingUrl}/static/c/','.js?sv=');
						 `,
                        } }
                    />
                )
            }
            <noscript className="heatmap-site__global-noscript">
                Please enable JavaScript in your browser to enjoy heatmap.com.
            </noscript>
            { /* eslint-enable heatmap/jsx-classname-namespace, react/no-danger */ }
            </body>
            </html>
        );
    }
}

export default Document;