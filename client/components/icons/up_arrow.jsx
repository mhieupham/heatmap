import React from 'react';
import PropTypes from 'prop-types';

export default class UpArrowIcon extends React.PureComponent {
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
                    <path style={{fill: 'currentColor'}} d="M466.22,205.787L263.553,3.12c-4.16-4.16-10.923-4.16-15.083,0L45.804,205.787c-21.803,21.803-21.803,57.28,0,79.083
                        s57.28,21.803,79.083,0l77.781-77.781v251.584c0,29.397,23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333V207.088
                        l77.781,77.781c21.803,21.803,57.28,21.803,79.083,0C488.001,263.088,488.001,227.589,466.22,205.787z"/>
                </svg>
            </span>
        );
    }
}