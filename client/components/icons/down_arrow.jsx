import React from 'react';
import PropTypes from 'prop-types';

export default class DownArrowIcon extends React.PureComponent {
    static propTypes = {
        size: PropTypes.number,
    };

    static defaultProps = {
        size: 24,
    };

    render() {
        return (
            <span style={{height: this.props.size}}>
                <svg
                    width={this.props.size}
                    height={this.props.size}
                    viewBox='0 0 512.005 512.005'
                    role='icon'
                >
                    <path style={{fill: 'currentColor'}} d="M466.216,227.115c-21.803-21.803-57.28-21.803-79.083,0l-77.803,77.803V53.333C309.331,23.936,285.395,0,255.997,0
			s-53.333,23.936-53.333,53.333v251.584l-77.781-77.781c-21.803-21.803-57.28-21.803-79.083,0s-21.803,57.28,0,79.083
			l202.667,202.667c2.069,2.069,4.8,3.115,7.531,3.115c2.731,0,5.461-1.045,7.552-3.115l202.667-202.667
			C487.997,284.416,487.997,248.917,466.216,227.115z"/>
                </svg>
            </span>
        );
    }
}