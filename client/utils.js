/** @format */

// Adapts route paths to also include wildcard
// subroutes under the root level section.
export function pathToRegExp( path ) {
    // Prevents root level double dash urls from being validated.
    if ( path === '/' ) {
        return path;
    }
    return new RegExp( '^' + path + '(/.*)?$' );
}

// takes in a fn where its last arg is a node-style callback
// outputs a promise
export const promisify = fn => ( ...args ) =>
new Promise( ( resolve, reject ) => {
    fn( ...args, ( err, data ) => {
        if ( err ) {
            reject( err );
        } else {
            resolve( data );
        }
    } );
} );

const SIZES = {
    xsmall: {min: 0, max: 599},
    small: {min: 600, max: 779},
    medium: {min: 780, max: 979},
    large: {min: 980, max: 1279},
    xlarge: {min: 1280, max: 1339},
    xxlarge: {min: 1340, max: Infinity},

    // Sidebar/nav related tweakpoints
    largerSidebar: {min: 1100, max: 1339},
    sidebarFixed: {min: 2000, max: Infinity},

    // Topbar related tweakpoints
    expandedSearch: {min: 1180, max: Infinity},
};


export const media = {
    between(smallKey, largeKey, excludeLarge = false) {
        if (excludeLarge) {
            return `@media (min-width: ${
                SIZES[smallKey].min
                }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
        } else {
            if (SIZES[largeKey].max === Infinity) {
                return `@media (min-width: ${SIZES[smallKey].min}px)`;
            } else {
                return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
                    SIZES[largeKey].max
                    }px)`;
            }
        }
    },

    greaterThan(key) {
        return `@media (min-width: ${SIZES[key].min}px)`;
    },

    lessThan(key) {
        return `@media (max-width: ${SIZES[key].min - 1}px)`;
    },

    size(key) {
        const size = SIZES[key];

        if (size.min == null) {
            return media.lessThan(key);
        } else if (size.max == null) {
            return media.greaterThan(key);
        } else {
            return media.between(key, key);
        }
    },
};
