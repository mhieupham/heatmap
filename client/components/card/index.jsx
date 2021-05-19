import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

export default class Card extends React.PureComponent {
    static propTypes = {
        isError: PropTypes.bool,
        children: PropTypes.any,
    };
    render() {
        return (
            <div className={classNames('c-card', {
                'c-card--error': this.props.isError,
            })}>
                {this.props.children}
            </div>
        );
    }
}