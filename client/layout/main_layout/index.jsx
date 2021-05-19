import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    getSectionGroup,
    getSectionName,
} from 'state/ui/selectors';
import BodySectionCssClass from '../body_section_css_class';

import IntlProvider from 'components/intl_provider';

import ScrollToTop from './scroll_top';

import './style.scss';

class MainLayout extends React.Component {
    static propTypes = {
        primary: PropTypes.element,
        secondary: PropTypes.element,
        focus: PropTypes.object,
        isOffline: PropTypes.bool,
        sectionGroup: PropTypes.string,
        sectionName: PropTypes.string,
    };

    render() {
        const {
            isPopup,
            primary,
            secondary,
            sectionGroup,
            sectionName,
        } = this.props;

        const classes = {
            [ 'is-group-' + sectionGroup ]: sectionGroup,
            [ 'is-section-' + sectionName ]: sectionName,
            'focus-content': true,
            'is-popup': isPopup,
        };

        return (
            <IntlProvider>
                <ScrollToTop>
                    <div className={ classNames( 'layout', classes ) }>
                        <BodySectionCssClass group={ sectionGroup } section={ sectionName } />
                        <div id="content" className="layout__content">
                            <div id="primary" className="layout__primary">
                                { primary }
                            </div>
                            <div id="secondary" className="layout__secondary">
                                { secondary }
                            </div>
                        </div>
                    </div>
                </ScrollToTop>
            </IntlProvider>
        );
    }
}

function mapStateToProps(state) {
    const sectionGroup = getSectionGroup( state );
    const sectionName = getSectionName( state );

    return {
        sectionGroup,
        sectionName,
    }
}

export default connect(mapStateToProps)(MainLayout);
