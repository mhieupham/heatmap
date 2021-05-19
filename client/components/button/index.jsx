import React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';
import classNames from 'classnames';

import './style.scss';

export default class Button extends React.PureComponent {
    static propTypes = {
        type: PropTypes.string,
        isPrimary: PropTypes.bool,
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool,
        onClick: PropTypes.func,
        children: PropTypes.any,
    };

    static defaultProps = {
        onClick: noop,
    };

    render() {
        const {
            type,
            isPrimary,
            disabled,
            isLoading,
            onClick,
            children,
        } = this.props;
        return (
            <button
                type={type || 'button' }
                className={classNames('button', {
                    'primary': isPrimary,
                    'disabled': disabled,
                    'is-loading': isLoading,
                })}
                disabled={disabled}
                onClick={onClick}
            >
                <div className='button__content'>
                    {isLoading && (
                        <div className='icon'>
                            <img
                                alt={'spinner'}
                                className='spinner loading'
                                src={'/heatmap/images/loading.gif'}
                            />
                        </div>
                    )}
                    {children}
                </div>
            </button>
        );
    }
}