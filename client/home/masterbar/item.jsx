/** @format */

/**
 * External dependencies
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { isFunction, noop } from 'lodash';

class MasterbarItem extends Component {
    static propTypes = {
        url: PropTypes.string,
        onClick: PropTypes.func,
        tooltip: PropTypes.string,
        icon: PropTypes.string,
        className: PropTypes.string,
        isActive: PropTypes.bool,
        preloadSection: PropTypes.func,
    };

    static defaultProps = {
        icon: '',
        onClick: noop,
    };

    _preloaded = false;

    preload = () => {
        if ( ! this._preloaded && isFunction( this.props.preloadSection ) ) {
            this._preloaded = true;
            this.props.preloadSection();
        }
    };

    render() {
        return (
            <a
                data-tip-target={ this.props.tipTarget }
                href={ this.props.url }
                onClick={ this.props.onClick }
                title={ this.props.tooltip }
                className={ classNames('ob-button ob-button--link lf-navigation-nav--links-item', {
                    'is-active': this.props.isActive,
                }) }
                onTouchStart={ this.preload }
                onMouseEnter={ this.preload }
            >
                { this.props.children }
            </a>
        );
    }
}

export default MasterbarItem;
