const fs = require( 'fs' );
const path = require( 'path' );

function getAliasesForExtensions( { extensionsDirectory } ) {
    const extensionsNames = fs
        .readdirSync( extensionsDirectory )
        .filter( filename => filename.indexOf( '.' ) === -1 ); // heuristic for finding directories

    const aliasesMap = {};
    extensionsNames.forEach(
        extensionName =>
            ( aliasesMap[ extensionName ] = path.join( extensionsDirectory, extensionName ) )
    );
    return aliasesMap;
}

module.exports = getAliasesForExtensions;
