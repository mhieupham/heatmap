import React from 'react';
import {FormattedMessage} from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {noop} from 'lodash';

import {
    getSectionGroup,
    getSectionName,
} from 'state/ui/selectors';
import { preload } from 'sections_helper';
import Item from './item';
import LogoGlyphBlue from 'assets/images/logo_glyph_blue.svg';
import LogoGlyphWhite from 'assets/images/logo_glyph_white.svg';
import LogoWorldmarkBlack from 'assets/images/logo_world_mark_black.svg';
import LogoWorldmarkWhite from 'assets/images/logo_world_mark_white.svg';
import './style.scss';

class HomeMasterbar extends React.PureComponent {
    static propTypes = {
        sectionGroup: PropTypes.string,
        sectionName: PropTypes.string,
        className: PropTypes.string,
        showBorder: PropTypes.bool,
        theme: PropTypes.oneOf(['black', 'white']),
        isMobileNavOpen: PropTypes.bool,
        onMobileNavOpenChange: PropTypes.func,
        onRegisterModeChange: PropTypes.func,
        onRegisterFormToggle: PropTypes.func,
    };

    static defaultProps = {
        theme: 'black',
        onMobileNavOpenChange: noop,
        onRegisterModeChange: noop,
        onRegisterFormToggle: noop,
    };

    constructor(props) {
        super(props);

        this.state = {
            isMobileNavOpen: this.props.isMobileNavOpen,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isMobileNavOpen !== this.props.isMobileNavOpen) {
            this.setState({isMobileNavOpen: nextProps.isMobileNavOpen});
        }
    }

    handleMenuClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({isMobileNavOpen: true}, () => {
            this.props.onMobileNavOpenChange(this.state.isMobileNavOpen);
        });
    };

    handleMobileMenuClose = () => {
        this.setState({isMobileNavOpen: false}, () => {
            this.props.onMobileNavOpenChange(false);
        });
    };

    handleLoginButtonClick = () => {
        this.props.onRegisterFormToggle('login');
    };

    handleRegisterButtonClick = () => {
        this.props.onRegisterFormToggle('register');
    };

    clickFeatures = () => {

    };

    preloadFeatures = () => {
        preload( 'features' );
    };

    clickPricing = () => {

    };

    preloadPricing = () => {
        preload( 'pricing' );
    };

    clickHelp = () => {

    };

    preloadHelp = () => {
        preload( 'help' );
    };

    clickWhatIsHeatmap = () => {

    };

    preloadWhatIsHeatmap = () => {
        preload( 'whatIsHeatmap' );
    };

    isActive = section => {
        return section === this.props.sectionGroup;
    };

    render() {
        const {
            theme,
            className,
            isMobileNavOpen,
        } = this.props;

        let glyph;
        let wordmark;
        if (theme === 'black') {
            glyph = LogoGlyphWhite;
            wordmark = LogoWorldmarkWhite;
        } else {
            glyph = LogoGlyphBlue;
            wordmark = LogoWorldmarkBlack;
        }

        return (
            <section className={classNames('lf-navigation', className)}>
                <div className={classNames('lf-navigation-container', {
                    'show-border': this.props.showBorder,
                })}>
                    <nav className='lf-navigation-container-content'>
                        <a href='/'>
                            <div className='heatmapLogo' role='img' atia-label='heatmap'>
                                <img
                                    style={{height: 34}}
                                    src={glyph}
                                    className='heatmapLogo--glyph'
                                />
                                <img
                                    style={{height: 34}}
                                    src={wordmark}
                                    className='heatmapLogo--wordmark'
                                />
                            </div>
                        </a>
                        <div className='lf-navigation-nav'>
                            <div className='lf-navigation-nav-cta' aria-hidden={true}>
                                <Item
                                    tipTarget="features"
                                    url="/features"
                                    icon="user-circle"
                                    onClick={ this.clickFeatures }
                                    tooltip='Xem các tính năng của heatmap'
                                    preloadSection={ this.preloadFeatures }
                                    isActive={ this.isActive( 'features' ) }
                                >
                                    <FormattedMessage
                                        id='general.features.text'
                                        defaultMessage='Features'
                                    />
                                </Item>
                                <Item
                                    tipTarget="pricing"
                                    url="/pricing"
                                    icon="user-circle"
                                    onClick={ this.clickPricing }
                                    tooltip='Bảng giá sử dụng heatmap'
                                    preloadSection={ this.preloadPricing }
                                    isActive={ this.isActive( 'pricing' ) }
                                    className='ob-button ob-button--link lf-navigation-nav--links-item'
                                >
                                    <FormattedMessage
                                        id='general.pricing.text'
                                        defaultMessage='Pricing'
                                    />
                                </Item>
                                <Item
                                    tipTarget="help"
                                    url="https://docs.heatmap.com"
                                    icon="user-circle"
                                    onClick={ this.clickHelp }
                                    tooltip='Tài liệu sử dụng heatmap'
                                    preloadSection={ this.preloadHelp }
                                    isActive={ this.isActive( 'help' ) }
                                    className='ob-button ob-button--link lf-navigation-nav--links-item'
                                >
                                    <FormattedMessage
                                        id='general.help.text'
                                        defaultMessage='Help'
                                    />
                                </Item>
                                <Item
                                    tipTarget="whatIsHeatmap"
                                    url="/heatmap-la-gi"
                                    icon="user-circle"
                                    onClick={ this.clickWhatIsHeatmap }
                                    tooltip='Tìm hiểu về heatmap'
                                    preloadSection={ this.preloadWhatIsHeatmap }
                                    isActive={ this.isActive( 'what_is_heatmap' ) }
                                    className='ob-button ob-button--link lf-navigation-nav--links-item'
                                >
                                    <FormattedMessage
                                        id='general.what_is_heatmap.text'
                                        defaultMessage='What is heatmap?'
                                    />
                                </Item>
                            </div>
                            <section className='lf-navigation-nav--links'>
                                {!isMobileNavOpen && (
                                    <React.Fragment>
                                        <button
                                            className="lf-navigation-nav--links-item lf-navigation-nav--links-item__sign-up lf-navigation-nav--links-item__hidden ob-button ob-button--link"
                                            tabIndex="-1"
                                            onClick={this.handleLoginButtonClick}
                                        >
                                            Đăng nhập
                                        </button>
                                        <button
                                            className="lf-navigation-nav--links-item lf-navigation-nav--links-item__sign-up ob-button ob-button--link"
                                            tabIndex="-1"
                                            onClick={this.handleRegisterButtonClick}
                                        >
                                            Đăng ký
                                        </button>
                                        <button
                                            className={classNames('lf-navigation-nav--links-item ob-button ob-button--cheeseburger', {
                                                'ob-button--cheeseburger__white': theme === 'black',
                                            })}
                                            tabIndex="-1"
                                            onClick={this.handleMenuClick}
                                        >
                                            Menu
                                        </button>
                                    </React.Fragment>
                                )}
                                {isMobileNavOpen && (
                                    <button
                                        className="ob-button ob-button--close" aria-label="Close"
                                        onClick={this.handleMobileMenuClose}
                                    >
                                        Close
                                    </button>
                                )}
                            </section>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}

export default connect( state => {
    const sectionGroup = getSectionGroup( state );
    const sectionName = getSectionName( state );

    return {
        sectionGroup,
        sectionName,
    };
} )( HomeMasterbar );


export const MobileNav = ({className, isMobileNavOpen, onMobileNavOpenChange, onRegisterFormToggle}) => {
    return (
        <section className='lf-mobile-nav'>
            <HomeMasterbar
                theme={'white'}
                className={className}
                isMobileNavOpen={isMobileNavOpen}
                onMobileNavOpenChange={onMobileNavOpenChange}
                onRegisterFormToggle={onRegisterFormToggle}
            />
            <div className='lf-mobile-nav-nav'>
                <button
                    className="lf-mobile-nav-nav--link ob-button ob-button--link"
                    onClick={() => {
                        onMobileNavOpenChange(false);
                        onRegisterFormToggle('login');
                    }}
                >
                    {'Đăng nhập'}
                </button>
                <a href="/features" className="lf-mobile-nav-nav--link">Tính năng</a>
                <a href="/pricing" className="lf-mobile-nav-nav--link"
                   data-trackingid="home_nav_teams_zeus">Bảng giá</a>
                <a href="https://docs.heatmap.com" className="lf-mobile-nav-nav--link"
                   data-trackingid="home_nav_individuals_zeus">Tài liệu hướng dẫn</a>
                <a href="/heatmap-la-gi" className="lf-mobile-nav-nav--link"
                   data-trackingid="home_nav_individuals_zeus">Heatmap là gì?</a>
            </div>
        </section>
    );
};
