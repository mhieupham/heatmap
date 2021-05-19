import React from 'react';

const addBodyClass = toClass => value => () => {
    // if value is empty-ish, don't add any CSS classes
    if ( ! value ) {
        return;
    }

    // convert the value (section or group name) to a CSS class name
    const className = toClass( value );

    // add the CSS class to body when performing the effect
    document.body.classList.add( className );

    // remove the CSS class from body in the effect cleanup function
    return () => document.body.classList.remove( className );
};

// two effect creators for groups and sections
const addGroupClass = addBodyClass( g => `is-group-${ g }` );
const addSectionClass = addBodyClass( s => `is-section-${ s }` );

export default function BodySectionCssClass( { group, section } ) {
    React.useEffect( addGroupClass( group ), [ group ] );
    React.useEffect( addSectionClass( section ), [ section ] );

    return null;
}
