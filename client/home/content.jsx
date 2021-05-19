import React from 'react';
import {FormattedMessage} from 'react-intl';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {
    requestAnimationTimeout,
    cancelAnimationTimeout,
} from 'react-virtualized/dist/commonjs/utils/requestAnimationTimeout';

import Head from 'components/data/document_head';
import HomeMasterbar, {MobileNav} from './masterbar';
import Register from './register';
import Footer from 'layout/footer';
import {isMobile} from 'utils/user_agent';
import './style.scss';

export default class HomeContent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isMobileNavOpen: false,
            scrolling: false,
            registerMode: 'register',
            registerFormOpen: false,
        };
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    });

    handleScroll = (event) => {
        if (isMobile()) {
            event.preventDefault();
            return;
        }
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        this.setState({scrolling: true, scrollTop, registerFormOpen: scrollTop < 400});
        this.getProductContainerTop(scrollTop);
        this._debounceScrollEnded();
    };

    _debounceScrollEnded() {
        const scrollingResetTimeInterval = 150; // {scrollingResetTimeInterval} = this.props || 50;

        if (this._disablePointerEventsTimeoutId) {
            cancelAnimationTimeout(this._disablePointerEventsTimeoutId);
        }

        this._disablePointerEventsTimeoutId = requestAnimationTimeout(
            this._debounceScrollEndedCallback,
            scrollingResetTimeInterval
        );
    };

    _debounceScrollEndedCallback = () => {
        this._disablePointerEventsTimeoutId = null;

        // isScrolling is used to determine if we reset styleCache
        this.setState(function(e) {
            if (!e.scrolling) return null;
            return {
                scrolling: false,
            };
        });
    };

    getProductContainerTop = (scrollTop) => {
        if (!this.sticky || !this.productContainer) {
            return;
        }

        const heatmapImage = ReactDOM.findDOMNode(this.heatmapImage);
        const heatmapImageRect = heatmapImage ? heatmapImage.getBoundingClientRect() : null;
        const recordingImage = ReactDOM.findDOMNode(this.recordingImage);
        const recordingImageRect = recordingImage ? recordingImage.getBoundingClientRect() : null;

        const heatmapImageIsOnScreen = heatmapImageRect.top >= 90;

        const recordingImageIsAboveScreen = recordingImageRect.top < 90 && Math.abs(recordingImageRect.top) > (recordingImageRect.height - 90);

        const heatmapSticky = ReactDOM.findDOMNode(this.heatmapSticky);
        const heatmapStickyRect = heatmapSticky ? heatmapSticky.getBoundingClientRect() : {};

        const recordingSticky = ReactDOM.findDOMNode(this.recordingSticky);
        const recordingStickyRect = recordingSticky ? recordingSticky.getBoundingClientRect() : {};

        let stickyTranslateY = 32;
        if (heatmapImageIsOnScreen) {
            stickyTranslateY = 32;
        } else if (!recordingImageIsAboveScreen) {
            stickyTranslateY += ( - (heatmapImageRect.top - 90) * ((heatmapStickyRect.height + 20) / heatmapImageRect.height));
        } else {
            stickyTranslateY += (heatmapStickyRect.height + 20) + (recordingStickyRect.height + 20);
        }

        let stickyScaleY;
        let stickyTop;
        let activeSticky = 'heatmap';
        if (stickyTranslateY - 32 <= heatmapStickyRect.height / 2) {
            activeSticky = 'heatmap';
            stickyTop = 90;
            stickyScaleY = heatmapStickyRect.height / 156;
        } else if (stickyTranslateY - 32 <= (heatmapStickyRect.height + 20) + recordingStickyRect.height / 2) {
            activeSticky = 'recording';
            stickyTop = 90 - heatmapStickyRect.height;
            stickyScaleY = recordingStickyRect.height / 156;
        } else {
            activeSticky = 'abTesting';
            const abTestingSticky = ReactDOM.findDOMNode(this.abTestingSticky);
            const abTestingStickyRect = abTestingSticky ? abTestingSticky.getBoundingClientRect() : null;
            stickyScaleY = abTestingStickyRect.height / 156;
            stickyTop = 90 - heatmapStickyRect.height - recordingStickyRect.height;
        }

        this.setState({stickyTranslateY, stickyScaleY, activeSticky, stickyTop});
    };

    handleProductRef = (r) => {
        this.productContainer = r;
    };

    handleStickyClick = (stickyItem) => {
        let scrollTo;
        switch (stickyItem) {
            case 'heatmap': {
                const heatmapImage = ReactDOM.findDOMNode(this.heatmapImage);
                const heatmapImageRect = heatmapImage ? heatmapImage.getBoundingClientRect() : null;
                scrollTo = this.state.scrollTop + heatmapImageRect.top;
                break;
            }
            case 'recording': {
                const recordingImage = ReactDOM.findDOMNode(this.recordingImage);
                const recordingImageRect = recordingImage ? recordingImage.getBoundingClientRect() : null;
                scrollTo = this.state.scrollTop + recordingImageRect.top;
                break;
            }
            case 'abTesting': {
                const abTestingImage = ReactDOM.findDOMNode(this.abTestingImage);
                const abTestingImageRect = abTestingImage ? abTestingImage.getBoundingClientRect() : null;
                scrollTo = this.state.scrollTop + abTestingImageRect.top;
                break;
            }
        }
        window.scrollTo({
            top: scrollTo - 90,
            behavior: 'smooth',
        })
    };

    handleStickyRef = (r) => {
        this.sticky = r;
    };

    handleHeatmapImageRef = (r) => {this.heatmapImage = r};
    handleRecordingImageRef = (r) => {this.recordingImage = r};
    handleABTestingImageRef = (r) => {this.abTestingImage = r};

    handleHeatmapStickyRef = (r) => {
        this.heatmapSticky = r;
        const heatmapSticky = ReactDOM.findDOMNode(r);
        const heatmapStickyRect = heatmapSticky ? heatmapSticky.getBoundingClientRect() : {};
        this.setState({stickyScaleY: heatmapStickyRect.height / 156});
    };
    handleRecordingStickyRef = (r) => {this.recordingSticky = r};
    handleABTestingStickyRef = (r) => {this.abTestingSticky = r};

    renderStickyMark = () => {
        const {
            stickyTranslateY,
            stickyScaleY,
        } = this.state;
        return (
            <div className="product-tour-sticky-nav-scroll__container">
                <div className="product-tour-sticky-nav-scroll__bar"
                     style={{transform: `translateY(${stickyTranslateY}px) scaleY(${stickyScaleY})`}}/>
            </div>
        );
    };

    renderStickySection = () => {
        return (
          <section className='lf-grid-container lf-padding--none lf-background-color--sapphire product-tour-nav__container'>
              <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--row lf-align--flex-start lf-spacing--flex-start'>
                  <div
                      className='lf-grid-element product-tour-sticky-nav__container lf-align--flex-start lf-grid-element--width--1-1 lf-grid-element--width--1-3--medium lf-grid-element--width--1-4--large lf-direction--column lf-left-margin--0-1 lf-left-margin--1-12--medium lf-right-margin--0-1 lf-right-margin--1-24--medium lf-spacing--center'
                      style={{top: this.state.stickyTop}}
                  >
                      {this.renderStickyBox()}
                  </div>
                  {this.renderProductImages()}
              </div>
          </section>
        );
    };

    renderHeatmapsDetail = () => {
        return (
            <div className="product-tour-description">
                <h3 className="lf-headline lf-top-margin--none lf-bottom-margin--small lf-headline--33 lf-headline--title-3 product-tour-description__heading">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img
                            style={{width: 24, marginRight: 8}}
                            src='/heatmap/images/heatmaps.svg'
                        />
                        <span className='lf-foreground-color--panda-white'>
                            {'Heatmaps'}
                        </span>
                    </div>
                </h3>
                <p className="lf-copy lf-copy--standard lf-foreground-color--panda-white product-tour-description__text">
                    <FormattedMessage
                        id='home.features.heatmaps_description'
                        defaultMessage='Missing translation...'
                    />
                </p>
                <div className='lf-copy lf-copy--standard lf-foreground-color--panda-white product-tour-description__text'>
                    <ul className='product--check-list'>
                        <li>
                            <FormattedMessage
                                id='home.features.heatmaps_item1'
                                defaultMessage='Missing translation...'
                            />
                        </li>
                        <li>
                            <FormattedMessage
                                id='home.features.heatmaps_item2'
                                defaultMessage='Missing translation...'
                            />
                        </li>
                        <li>
                            <FormattedMessage
                                id='home.features.heatmaps_item3'
                                defaultMessage='Missing translation...'
                            />
                        </li>
                        <li>
                            <FormattedMessage
                                id='home.features.heatmaps_item4'
                                defaultMessage='Missing translation...'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    renderRecordingsDetail = () => {
        return (
            <div className="product-tour-description">
                <h3 className="lf-headline lf-top-margin--none lf-bottom-margin--small lf-headline--33 lf-headline--title-3 product-tour-description__heading">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img
                            style={{width: 24, marginRight: 8}}
                            src='/heatmap/images/videos.svg'
                        />
                        <span className='lf-foreground-color--panda-white'>
                            {'Recordings'}
                        </span>
                    </div>
                </h3>
                <div className="lf-copy lf-copy--standard lf-foreground-color--panda-white product-tour-description__text">
                    <FormattedMessage
                        id='home.features.recordings_description'
                        defaultMessage='Missing translation...'
                    />
                    <ul className='product--check-list'>
                        <li>
                            <FormattedMessage
                                id='home.features.recordings_item1'
                                defaultMessage='Missing translation...'
                            />
                        </li>
                        <li>
                            <FormattedMessage
                                id='home.features.recordings_item2'
                                defaultMessage='Missing translation...'
                            />
                        </li>
                        <li>
                            <FormattedMessage
                                id='home.features.recordings_item3'
                                defaultMessage='Missing translation...'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    renderABTestingsDetail = () => {
        return (
            <div className="product-tour-description">
                <h3 className="lf-headline lf-top-margin--none lf-bottom-margin--small lf-headline--33 lf-headline--title-3 product-tour-description__heading">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img
                            style={{width: 24, marginRight: 8}}
                            src='/heatmap/images/abtestings.svg'
                        />
                        <span className='lf-foreground-color--panda-white'>
                            {'A/B Testings'}
                        </span>
                    </div>
                </h3>
                <p className="lf-copy lf-copy--standard lf-foreground-color--panda-white product-tour-description__text">
                    <FormattedMessage
                        id='home.features.abtestings_description1'
                        defaultMessage='Missing translation...'
                    />
                </p>
                <br/>
                <p className="lf-copy lf-copy--standard lf-foreground-color--panda-white product-tour-description__text">
                    <FormattedMessage
                        id='home.features.abtestings_description2'
                        defaultMessage='Missing translation...'
                    />
                </p>
                <br/>
                <p className="lf-copy lf-copy--standard lf-foreground-color--panda-white product-tour-description__text">
                    <FormattedMessage
                        id='home.features.abtestings_description3'
                        defaultMessage='Missing translation...'
                    />
                </p>
            </div>
        );
    };

    renderStickyBox = () => {
        const {
            activeSticky,
        } = this.state;
        return (
            <div
                ref={this.handleStickyRef}
                className='product-tour__transition product-tour__transition--sticky-nav'
            >
                <div
                    ref={this.handleHeatmapStickyRef}
                    role="button"
                    className={classNames('product-tour-sticky-nav__item', {
                        'product-tour-sticky-nav__item--inactive': activeSticky !== 'heatmap',
                        'product-tour-sticky-nav__item--active': activeSticky === 'heatmap',
                    })}
                    id="product-tour-sticky-nav-item-0"
                    onClick={() => this.handleStickyClick('heatmap')}
                >
                    {this.renderHeatmapsDetail()}
                </div>
                <div
                    ref={this.handleRecordingStickyRef}
                    role="button"
                    className={classNames('product-tour-sticky-nav__item', {
                        'product-tour-sticky-nav__item--inactive': activeSticky !== 'recording',
                        'product-tour-sticky-nav__item--active': activeSticky === 'recording',
                    })}
                    id="product-tour-sticky-nav-item-1"
                    onClick={() => this.handleStickyClick('recording')}
                >
                    {this.renderRecordingsDetail()}
                </div>
                <div
                    ref={this.handleABTestingStickyRef}
                    role="button"
                    className={classNames('product-tour-sticky-nav__item', {
                        'product-tour-sticky-nav__item--inactive': activeSticky !== 'abTesting',
                        'product-tour-sticky-nav__item--active': activeSticky === 'abTesting',
                    })}
                    id="product-tour-sticky-nav-item-2"
                    onClick={() => this.handleStickyClick('abTesting')}
                >
                    {this.renderABTestingsDetail()}
                </div>
                {/*{this.renderStickyMark()}*/}
            </div>
        );
    };

    renderProductImages = () => {
        const {windowWidth} = this.state;
        let style;
        if (windowWidth > 780) {
            style = {
                height: 670,
                width: '100%',
            }
        }
        return (
            <div
                ref={this.handleProductRef}
                className='lf-grid-element product-tour-image__container lf-align--flex-start lf-grid-element--width--1-1 lf-grid-element--width--11-24--medium lf-grid-element--width--13-24--large lf-direction--column lf-right-margin--0-1 lf-right-margin--1-12--medium lf-spacing--flex-start'
            >
                <section className='lf-grid-container lf-padding--none lf-background-color--sapphire'>
                    <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-align--center lf-spacing--flex-start lf-spacing--space-between--medium'>
                        <div
                            ref={this.handleHeatmapImageRef}
                            className='product-tour-image__page'
                            style={style}
                        > {/*TODO: remove style on mobile*/}
                            <div className='lf-grid-element product-tour-image__page-content lf-align--flex-start lf-grid-element--width--1-1 lf-direction--column lf-spacing--flex-start'>
                                <div className='product-tour__transition product-tour__transition--image'>
                                    <section className='lf-grid-container lf-padding--none product-tour-image__page-inner-container'>
                                        <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-align--center lf-spacing--center'>
                                            <div
                                                className='lf-grid-element product-tour-image__item lf-align--center lf-grid-element--width--1-1 lf-direction--column lf-top-margin--large lf-top-margin--none--medium lf-spacing--center'
                                            >
                                                <img
                                                    alt="Website heatmaps heatmap"
                                                    src="/heatmap/images/heatmap_1x.png"
                                                    srcSet="/heatmap/images/heatmap_2x.png 2x"
                                                />
                                            </div>
                                            <div className='lf-grid-element product-tour-image__description lf-align--flex-start lf-grid-element--width--5-6 lf-direction--column lf-top-margin--medium lf-spacing--flex-start'>
                                                {this.renderHeatmapsDetail()}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div
                            ref={this.handleRecordingImageRef}
                            className='product-tour-image__page'
                            style={style}
                        > {/*TODO: remove style on mobile*/}
                            <div className='lf-grid-element product-tour-image__page-content lf-align--flex-start lf-grid-element--width--1-1 lf-direction--column lf-spacing--flex-start'>
                                <div className='product-tour__transition product-tour__transition--image'>
                                    <section className='lf-grid-container lf-padding--none product-tour-image__page-inner-container'>
                                        <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-align--center lf-spacing--center'>
                                            <div
                                                className='lf-grid-element product-tour-image__item lf-align--center lf-grid-element--width--1-1 lf-direction--column lf-top-margin--large lf-top-margin--none--medium lf-spacing--center'
                                            >
                                                <img
                                                    srcSet="/heatmap/images/recordings_2x.gif 2x"
                                                    alt="Recordings sessions heatmap"
                                                    src="/heatmap/images/recordings_1x.gif"
                                                />
                                            </div>
                                            <div className='lf-grid-element product-tour-image__description lf-align--flex-start lf-grid-element--width--5-6 lf-direction--column lf-top-margin--medium lf-spacing--flex-start'>
                                                {this.renderRecordingsDetail()}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div
                            ref={this.handleABTestingImageRef}
                            className='product-tour-image__page'
                            style={style}
                        > {/*TODO: remove style on mobile*/}
                            <div className='lf-grid-element product-tour-image__page-content lf-align--flex-start lf-grid-element--width--1-1 lf-direction--column lf-spacing--flex-start'>
                                <div className='product-tour__transition product-tour__transition--image'>
                                    <section className='lf-grid-container lf-padding--none product-tour-image__page-inner-container'>
                                        <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-align--center lf-spacing--center'>
                                            <div
                                                className='lf-grid-element product-tour-image__item lf-align--center lf-grid-element--width--1-1 lf-direction--column lf-top-margin--large lf-top-margin--none--medium lf-spacing--center'
                                            >
                                                <img
                                                    srcSet="/heatmap/images/abtesting_2x.png 2x"
                                                    alt=""
                                                    src="/heatmap/images/abtesting_1x.png"
                                                />
                                            </div>
                                            <div className='lf-grid-element product-tour-image__description lf-align--flex-start lf-grid-element--width--5-6 lf-direction--column lf-top-margin--medium lf-spacing--flex-start'>
                                                {this.renderABTestingsDetail()}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };

    renderClients = () => {
        const content = [];
        for (let i = 1; i <= 24; i++) {
            content.push(
                <div
                    key={`client_${i}`}
                    className='lf-grid-element lf-grid-element--width--1-4 lf-grid-element--width--1-4--medium lf-grid-element--width--1-8--large lf-padding--none lf-margin--none clients-section'
                >
                    <img
                        alt=""
                        src={`/heatmap/images/clients/clients_${(i < 10) ? '0' + i.toString() : i.toString()}.png`}
                    />
                </div>
            );
        }

        return (
            <section className='lf-grid-container lf-padding--xxl lf-padding--xl--medium lf-grid-container--relative lf-background-color--panda-white-light'>
                {this.renderMasterbar('white', 'lf-navigation-theme__default')}
                <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-align--flex-start lf-spacing--flex-start lf-spacing--space-between--medium'>
                    <div className='lf-grid-element sidekick-headline lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--2-3--medium lf-grid-element--width--1-2--large lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-bottom-margin--medium lf-bottom-margin--large--medium lf-spacing--flex-start'>
                        <h2 className='lf-headline lf-headline--33 lf-headline--title-2 lf-foreground-color--sapphire product-tour-headline__text'>
                            <FormattedMessage
                                id='home.who_uses_heatmap'
                                defaultMessage='Who uses heatmap?'
                            />
                        </h2>
                    </div>
                    <div className='lf-grid-element lf-align--flex-start lf-grid-element--width--1-1 lf-direction--column lf-spacing--flex-start'>
                        <section className='lf-grid-container lf-padding--none'>
                            <div
                                className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-direction--row--large lf-align--flex-start lf-spacing--flex-start'
                            >
                                <div
                                    className='lf-grid-element lf-left-margin--1-12 lf-right-margin--1-12 lf-left-margin--1-12--medium lf-right-margin--1-24--medium'
                                >
                                    {content}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        );
    };

    renderCTASection = () => {
        return (
            <section
                className='lf-grid-container lf-padding--xl lf-top-padding--xxl--medium lf-background-color--primary lf-grid-container--relative product-tour__section'
            >
                {this.renderMasterbar('black', 'lf-navigation-theme__sapphire-french-vanilla')}
                <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-direction--row--medium lf-align--center lf-spacing--flex-start lf-spacing--space-between--medium'>
                    <div className='lf-grid-element lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--1-2--medium lf-direction--column lf-left-margin--1-12 lf-left-margin--1-8--medium lf-right-margin--1-12 lf-right-margin--1-24--medium lf-spacing--flex-start'>
                        <h2 className='lf-headline lf-headline--33 lf-headline--title-2 lf-foreground-color--french-light-yellow fw-300'>
                            <FormattedMessage
                                id='home.are_you_ready'
                                defaultMessage='Missing translation...'
                            />
                        </h2>
                    </div>
                    <div className='lf-grid-element lf-align--flex-start lf-align--flex-end--medium lf-grid-element--width--5-6 lf-grid-element--width--5-24--medium lf-direction--column lf-left-margin--1-12 lf-left-margin--0-1--medium lf-left-margin--0-1--large lf-right-margin--1-12 lf-right-margin--1-8--medium lf-top-margin--medium lf-top-margin--none--medium lf-spacing--flex-start'>
                        <div className='lf-grid-element lf-align--flex-start lf-align--flex-end--medium lf-grid-element--width--1-1 lf-direction--column lf-spacing--flex-start'>
                            <div>
                                <button
                                    onClick={() => this.handleRegisterFormToggle('register')}
                                   className="lf-button lf-button--cta lf-button--standard-wide-padding lf-button--standard-size lf-button--panda-white"
                                >
                                    {'Dùng thử miễn phí'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    renderPlatforms = () => {
        const content = [];
        for (let i = 1; i < 13; i++) {
            content.push(
                <div
                    key={`client_${i}`}
                    className='lf-grid-element lf-grid-element--width--1-2 lf-grid-element--width--1-4--medium lf-grid-element--width--1-6--large lf-padding--none lf-margin--none'
                >
                    <img
                        alt=""
                        src={`/heatmap/images/platforms/platforms_${(i < 10) ? '0' + i.toString() : i.toString()}.png`}/>
                </div>
            );
        }

        return (
            <section className='lf-grid-container lf-padding--xxl lf-bottom-padding--xxxl--medium lf-grid-container--relative lf-background-color--panda-white'>
                {this.renderMasterbar('white', 'lf-navigation-theme__default')}
                <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-align--flex-start lf-spacing--flex-start lf-spacing--space-between--medium'>
                    <div className='lf-grid-element sidekick-headline lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--2-3--medium lf-grid-element--width--1-2--large lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-bottom-margin--medium lf-bottom-margin--large--medium lf-spacing--flex-start'>
                        <h2 className='lf-headline lf-headline--22 lf-headline--title-2 lf-foreground-color--panda-black sidekick-headline__text lf-stretch--headline'>
                            heatmap tương thích với hầu hết các nền tảng website
                        </h2>
                    </div>
                    <div className='lf-grid-element lf-align--flex-start lf-grid-element--width--1-1 lf-direction--column lf-spacing--flex-start'>
                        <section className='lf-grid-container lf-padding--none'>
                            <div
                                className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-direction--row--large lf-align--flex-start lf-spacing--flex-start'
                            >
                                <div
                                    className='lf-grid-element lf-left-margin--1-12 lf-right-margin--1-12 lf-left-margin--1-12--medium lf-right-margin--1-24--medium'
                                >
                                    {content}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        );
    };

    renderFooter = () => {
        return (
            <section style={{width: '100%', position: 'relative'}}>
                {this.renderMasterbar('black', 'lf-navigation-theme__blackened')}
                <Footer theme='black'/>
            </section>
        );
    };

    renderMobileNav = () => {
        return (
            <MobileNav
                theme='white'
                isMobileNavOpen={this.state.isMobileNavOpen}
                onMobileNavOpenChange={this.handleMobileNavOpenChange}
                onRegisterFormToggle={this.handleRegisterFormToggle}
            />
        )
    };

    renderMasterbar = (theme, className) => {
        return (
            <HomeMasterbar
                theme={theme}
                className={className}
                isMobileNavOpen={this.state.isMobileNavOpen}
                onMobileNavOpenChange={this.handleMobileNavOpenChange}
                onRegisterFormToggle={this.handleRegisterFormToggle}
            />
        );
    };

    handleMobileNavOpenChange = (isOpen) => {
        this.setState({isMobileNavOpen: isOpen});
    };

    handleRegisterModeChange = (nextMode) => {
        this.setState({registerMode: nextMode});
    };

    handleRegisterFormToggle = (mode) => {
        this.setState({registerMode: mode, registerFormOpen: true, forceRegisterOpen: true});
    };

    handleRegisterClose = () => {
        this.setState({registerFormOpen: false, forceRegisterOpen: false})
    };

    openRegister = () => {
        this.setState({registerFormOpen: true, forceRegisterOpen: true})
    };

    handleScrollToSubHero = () => {
        if (!this.subHero) {
            return;
        }
        let scrollTo;
        const subHeroSection = ReactDOM.findDOMNode(this.subHero);
        const subHeroSectionRect = subHeroSection ? subHeroSection.getBoundingClientRect() : null;
        scrollTo = this.state.scrollTop + subHeroSectionRect.top;
        window.scrollTo({
            top: scrollTo - 90,
            behavior: 'smooth',
        })
    };

    handleSubHeroRef = (r) => {this.subHero = r};

    render() {
        return (
            <main>
                <Head title='Nền tảng đo lường Website & Landing page'/>
                {this.state.isMobileNavOpen && this.renderMobileNav()}
                <div className='lf-rebrand-hero'>
                    {this.renderMasterbar('black', 'lf-navigation lf-navigation-theme__sapphire-french-vanilla')}
                    <section className='lf-grid-container lf-padding--none lf-background-color--sapphire'>
                        <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-direction--row--medium lf-align--center lf-spacing--flex-start'>
                            <div className='lf-grid-element lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--1-2--medium lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-right-margin--1-12 lf-right-margin--5-12--medium lf-bottom-margin--medium lf-bottom-margin--large--medium lf-spacing--flex-start'>
                                <span className='lf-headline lf-headline--subtitle lf-stretch--headline lf-foreground-color--panda-white'>
                                    <span style={{lineHeight: '100%'}}>
                                        <FormattedMessage
                                            id='home.hero_title_line1'
                                            defaultMessage='Missing translation...'
                                        />
                                    </span>
                                </span>
                                <h1 className='lf-headline lf-headline--22 lf-headline--title-1 lf-foreground-color--french-light-yellow lf-stretch--headline'>
                                    <FormattedMessage
                                        id='home.hero_title_line2'
                                        defaultMessage='Missing translation...'
                                    />
                                </h1>
                            </div>
                            <div className='lf-grid-element lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--1-2--medium lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-right-margin--1-12 lf-right-margin--5-12--medium lf-bottom-margin--medium lf-bottom-margin--large--medium lf-spacing--flex-start'>
                                <div className='lf-copy lf-copy--large lf-foreground-color--panda-white'>
                                    <ul className='hero--check-list'>
                                        <li>
                                            <img
                                                style={{width: 20, marginRight: 8}}
                                                src='/heatmap/images/heatmaps.svg'
                                            />
                                            <FormattedMessage
                                                id='home.hero_subtitle1'
                                                defaultMessage='Missing translation...'
                                            />
                                        </li>
                                        <li>
                                            <img
                                                style={{width: 20, marginRight: 8}}
                                                src='/heatmap/images/videos.svg'
                                            />
                                            <FormattedMessage
                                                id='home.hero_subtitle2'
                                                defaultMessage='Missing translation...'
                                            />
                                        </li>
                                        <li>
                                            <img
                                                style={{width: 20, marginRight: 8}}
                                                src='/heatmap/images/abtestings.svg'
                                            />
                                            <FormattedMessage
                                                id='home.hero_subtitle3'
                                                defaultMessage='Missing translation...'
                                            />
                                        </li>
                                        <li>
                                            <img
                                                style={{width: 20, marginRight: 8}}
                                                src='/heatmap/images/polls.svg'
                                            />
                                            <FormattedMessage
                                                id='home.hero_subtitle4'
                                                defaultMessage='Missing translation...'
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='lf-grid-element lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--3-8--medium lf-grid-element--width--0-1--large lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-left-margin--0-1--large lf-right-margin--1-12 lf-right-margin--13-24--medium lf-right-margin--0-1--large lf-bottom-margin--large lf-spacing--flex-start'>
                                <button
                                    className='lf-button lf-button--standard-wide-padding lf-button--standard-size lf-button--panda-white zeus-rebrand-hero__cta'
                                    onClick={this.openRegister}
                                >
                                    {'Đăng ký miễn phí'}
                                </button>
                            </div>
                            {
                                /*<div className='lf-grid-element lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--3-8--medium lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-right-margin--1-12 lf-right-margin--13-24--medium lf-spacing--flex-start'>
                                <button
                                    className='lf-rebrand-hero__waypoint lf-arrow-button'
                                    onClick={this.handleScrollToSubHero}
                                >
                                    <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z" fill="#0d2f81"/></svg>
                                    <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z" fill="#0d2f81"/></svg>
                                </button>
                            </div>*/
                            }
                            <div className='lf-grid-element lf__hero--section-hero__aspect-box lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--5-6--medium lf-grid-element--width--1-2--large lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-right-margin--1-12 lf-right-margin--1-12--medium lf-right-margin--5-12--large lf-spacing--flex-start'>
                                <div className='lf-aspect-box' style={{paddingTop: '62.5%'}}>
                                    <div className='lf-aspect-box__child'/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section
                    ref={this.handleSubHeroRef}
                    className='lf-grid-container lf-top-padding--none lf-bottom-padding--xl lf-bottom-padding--xxl--medium lf-bottom-padding--xxxl--large lf-background-color--french-vanilla lf__hero--section-sub-hero'
                >
                    {this.renderMasterbar('white', 'lf-navigation-theme__french-vanilla')}
                    <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-direction--row--medium lf-align--center lf-spacing--flex-start lf-spacing--space-between--medium'>
                        <div className='lf-grid-element lf__hero--section-sub-hero__image lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--5-6--medium lf-grid-element--width--1-2--large lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-right-margin--1-12 lf-right-margin--1-12--medium lf-right-margin--1-24--large lf-bottom-margin--large lf-spacing--flex-start'>
                            <div className='lf-aspect-box' style={{paddingTop: '62.5%'}}>
                                <div className='lf-aspect-box__child'>
                                    <img
                                        className='main-hero--image'
                                        alt=""
                                        src="/heatmap/images/home_hero_1_8.png"
                                        srcSet="/heatmap/images/home_hero_1_8_2x.png 2x"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='lf-grid-element lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--5-12--medium lf-grid-element--width--1-4--large lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-left-margin--1-24--large lf-right-margin--1-12 lf-right-margin--1-12--medium lf-spacing--flex-start'>
                            <h2 className='lf-headline lf-headline--33 lf-headline--title-2 product-tour-headline__text lf-bottom-margin--small'>
                                <FormattedMessage
                                    id='home.sub_hero_title'
                                    defaultMessage='Missing translation...'
                                />
                                {', '}
                                <FormattedMessage
                                    id='home.sub_hero_title_will'
                                    defaultMessage='Missing translation...'
                                />
                            </h2>
                            <div className='lf-copy lf-copy--standard lf-foreground-color--panda-black'>
                                <ul className='product--check-list'>
                                    <li>
                                        <FormattedMessage
                                            id='home.sub_hero_check1'
                                            defaultMessage='Missing translation...'
                                        />
                                    </li>
                                    <li>
                                        <FormattedMessage
                                            id='home.sub_hero_check2'
                                            defaultMessage='Missing translation...'
                                        />
                                    </li>
                                    <li>
                                        <FormattedMessage
                                            id='home.sub_hero_check3'
                                            defaultMessage='Missing translation...'
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className='lf-grid-container lf-top-padding--xl lf-top-padding--xl--medium lf-bottom-padding--none lf-background-color--sapphire lf-grid-container--relative product-tour__section'
                >
                    {this.renderMasterbar('black', 'lf-navigation lf-navigation-theme__sapphire-french-vanilla')}
                    <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-align--flex-start lf-spacing--flex-start'>
                        <div className='product-tour__transition product-tour__transition--headline'> {/*Note detect IE*/}
                            <section className='lf-grid-container lf-top-padding--none lf-bottom-padding--small lf-background-color--sapphire product-tour-headline__container'>
                                <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--row lf-align--flex-start lf-spacing--flex-start'>
                                    <div className='lf-grid-element product-tour-headline lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--5-12--medium lf-grid-element--width--1-2--large lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-spacing--flex-start'>
                                        <h2 className='lf-headline lf-headline--33 lf-headline--title-2 lf-foreground-color--french-vanilla product-tour-headline__text'>
                                            <FormattedMessage
                                                id='home.features.heatmaps_title'
                                                defaultMessage='Missing translation...'
                                            />
                                        </h2>
                                    </div>
                                </div>
                                {this.renderStickySection()}
                                <div className='lf-grid-element product-tour-rule__container lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--5-6--medium lf-direction--column lf-left-margin--1-12 lf-left-margin--1-12--medium lf-top-margin--xl lf-spacing--flex-start'>
                                    <hr className="product-tour-rule"/>
                                </div>
                            </section>
                            <section className='lf-grid-container lf-padding--xl lf-padding--xl--medium lf-background-color--sapphire lf-grid-container--relative'>
                                <div className='lf-grid-container__usable-area lf-grid-container__usable-area--full-width lf-direction--column lf-direction--row--medium lf-align--flex-start lf-spacing--flex-start lf-spacing--space-between--medium'>
                                    <div className='lf-grid-element lf-align--flex-start lf-grid-element--width--5-6 lf-grid-element--width--1-2--medium lf-direction--column lf-left-margin--1-12 lf-left-margin--1-8--medium lf-right-margin--1-12 lf-right-margin--1-24--medium lf-spacing--flex-start'>
                                        <h2 className='lf-headline lf-headline--33 lf-headline--title-2 fw-300 lf-foreground-color--panda-white'>
                                            {'Tìm hiểu thêm về các tính năng khác của heatmap'}
                                        </h2>
                                    </div>
                                    <div className='lf-grid-element lf-align--flex-start lf-align--flex-end--medium lf-grid-element--width--5-6 lf-grid-element--width--5-24--medium lf-direction--column lf-left-margin--1-12 lf-left-margin--0-1--medium lf-left-margin--0-1--large lf-right-margin--1-12 lf-right-margin--1-8--medium lf-top-margin--medium lf-top-margin--none--medium lf-spacing--flex-start'>
                                        <div className='lf-grid-element lf-align--flex-start lf-align--flex-end--medium lf-grid-element--width--1-1 lf-direction--column lf-spacing--flex-start'>
                                            <div>
                                                <a href='/features' className='lf-button lf-button--cta lf-button--standard-wide-padding lf-button--standard-size lf-button--panda-white'>
                                                    {'Xem tất cả tính năng'}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                {this.renderClients()}
                {this.renderCTASection()}
                {/*{this.renderPlatforms()}*/}
                {this.renderFooter()}
                <Register
                    open={this.state.registerFormOpen}
                    forceOpen={this.state.forceRegisterOpen}
                    onClose={this.handleRegisterClose}
                    scrollTop={this.state.scrollTop}
                    isScrolling={this.state.scrolling}
                    registerMode={this.state.registerMode}
                    onRegisterModeChange={this.handleRegisterModeChange}
                    isMobile={isMobile()}
                />
            </main>
        )
    }
}
