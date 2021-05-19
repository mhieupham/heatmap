/* eslint-disable no-console */
/* eslint-disable import/no-nodejs-modules */

require( '@babel/polyfill' );

const boot = require( 'server/boot' );
const chalk = require( 'chalk' );
const fs = require( 'fs' );

const pkg = require( './package.json' );
const config = require( 'config' );

const start = Date.now();
const protocol = process.env.PROTOCOL || config( 'protocol' );
const port = process.env.PORT || config( 'port' );
const host = process.env.HOST || config( 'hostname' );
const app = boot();

function sendBootStatus( status ) {
    // don't send anything if we're not running in a fork
    if ( ! process.send ) {
        return;
    }
    process.send( { boot: status } );
}

console.log(
    chalk.yellow( '%s booted in %dms - %s://%s:%s' ),
    pkg.name,
    Date.now() - start,
    protocol,
    host,
    port
);

// Start a development HTTPS server.
function createServer() {
    return require( 'http' ).createServer( app );
}

const server = createServer();

server.listen( { port, host }, function() {
    // Tell the parent process that Calypso has booted.
    sendBootStatus( 'ready' );
} );
