import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'lodash';

import ErrorIcon from 'components/icons/error';
import './style.scss';

function FormTextInput( {
    name,
    className,
    action,
    forwardedRef,
    onFocus = noop,
    onBlur = noop,
    onKeyDown = noop,
    onChange = noop,
    onAction = noop,
    defaultValue = '',
    disabled,
    isError,
    error,
    isValid,
    ...props
} ) {
    const [ focused, setFocused ] = useState( false );
    const [ value, setValue ] = useState( defaultValue );

    const handleFocus = useCallback(
        e => {
            setFocused( true );
            onFocus( e );
        },
        [ onFocus ]
    );

    const handleBlur = useCallback(
        e => {
            setFocused( false );
            onBlur( e );
        },
        [ onBlur ]
    );

    const handleChange = useCallback(
        e => {
            setValue( e.target.value );
            onChange( name, e.target.value );
        },
        [ onChange ]
    );

    const handleAction = useCallback(
        e => {
            onAction( value, e );
        },
        [ onAction, value ]
    );

    const handleKeyDown = useCallback(
        e => {
            onKeyDown( e );
            if ( e.which === 13 && value ) {
                handleAction( e );
            }
        },
        [ handleAction, onKeyDown, value ]
    );

    return (
        <div
            role="group"
        >
            <input
                { ...props }
                className={ classNames( 'form__input', className, {
                    'is-focused': focused,
                    'is-disabled': disabled,
                    'is-error': isError,
                    'is-valid': isValid,
                } ) }
                ref={ forwardedRef }
                disabled={ disabled }
                onChange={ handleChange }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                onKeyDown={ handleKeyDown }
            />
            {isError && (
                <div className={classNames( 'form__validation', {
                    'is-disabled': disabled,
                    'is-error': isError,
                } )}>
                    <ErrorIcon size={14}/>
                    <span className='error-message'>{error}</span>
                </div>
            )}
        </div>
    );
}

FormTextInput.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
    inputRef: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    onAction: PropTypes.func,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    isError: PropTypes.bool,
    isValid: PropTypes.bool,
};


const InputRef = React.forwardRef((props, ref) => (
    <FormTextInput forwardedRef={ref} {...props}/>
));
InputRef.displayName = 'forwardRef(InputRef)';

export default InputRef;
