import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import getCurrentRoute from 'state/selectors/routes';

class ScrollToTop extends Component {
    static propTypes = {
        children: PropTypes.node,
        currentRoute: PropTypes.string, // eslint-disable-line
    };

    componentDidUpdate(prevProps) {
        if (this.props.currentRoute !== prevProps.currentRoute) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return <div style={{height: '100%'}}>{this.props.children}</div>;
    }
}

function mapStateToProps(state) {
    return {
        currentRoute: getCurrentRoute(state),
    }
}

export default connect(mapStateToProps)(ScrollToTop);