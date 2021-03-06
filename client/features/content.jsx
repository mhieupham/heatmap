import React from 'react';
import classNames from 'classnames';

import LinkIcon from 'heatmap-ui/lib/components/icon/link_icon';

import Head from 'components/data/document_head';
import HomeMasterBar, {MobileNav} from 'home/masterbar';
import Register from 'home/register';
import Footer from 'layout/footer';
import {isMobile} from 'utils/user_agent';

import './style.scss';
import {FormattedMessage} from "react-intl";

const HEADER_HEIGHT = 90;

export default class HomeContent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isMobileNavOpen: false,
            scrolling: false,
            registerMode: 'register',
            registerFormOpen: false,
            playing: false,
            heatmapMode: 'click',
            recordingMode: 'view',
            testingMode: 'edit',
            feedbackMode: 'display',
            pollMode: 'questions',
            dashboardMode: 'general',
        };
    }

    handleResize = () => this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    });

    handleRegisterModeChange = (nextMode) => {
        this.setState({registerMode: nextMode});
    };

    handleRegisterFormToggle = (mode) => {
        this.setState({registerMode: mode, registerFormOpen: true, forceRegisterOpen: true});
    };

    handleRegisterClose = () => {
        this.setState({registerFormOpen: false, forceRegisterOpen: false})
    };

    handleVideoRef = (r) => {this.video = r};

    handlePlayPause = () => {
        if (!this.video) {
            return;
        }

        this.setState({
            playing: true,
        }, () => {
            this.video.play();
        });
    };

    handleSummarySectionRef = (r) => {this.summarySection = r};
    renderSummarySection = () => {
        return (
            <div
                ref={this.handleSummarySectionRef}
                className='features__summary'
            >
                <div className='c42-page-header-level-2-plank__wrapper plank--fused pt-5 pt-md-5'>
                    <div className='row pt-0 pt-md-5'>
                        <div className='col-md-12'>
                            <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter'>
                                C??ng c??? thu th???p & ph??n t??ch h??nh vi kh??ch h??ng chi ti???t cho doanh nghi???p
                            </h2>
                            <div className='c42-page-header-level-2-plank__btn'>
                                <a href="https://app.heatmap.com/register_email"
                                   className="button button--primary button--medium button--medium--wide "
                                >
                                    D??ng th??? mi???n ph??
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    handleHeatmapSectionRef = (r) => {this.heatmapSection = r};
    handleHeatmapVideoRef = (r) => {this.heatmapVideo = r};
    handleHeatmapVideoEnded = () => {
        console.log('done playing heatmap video');
    };

    toggleHeatmapMode = (mode) => {
        this.setState({heatmapMode: mode});
    };

    toggleRecordingMode = (mode) => {
        this.setState({recordingMode: mode});
    };

    renderHelpItem = (link, text) => {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 14,
                }}
            >
                <LinkIcon
                    color='var(--color-blue)'
                    size='small'
                />
                <a
                    href={link}
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {text}
                </a>
            </div>
        );
    };

    renderFeatureHeatmap = () => {
        let heatmapImage1X;
        let heatmapImage2X;
        if (this.state.heatmapMode === 'click') {
            heatmapImage1X = '/heatmap/images/clicks_heatmap_1x.png';
            heatmapImage2X = '/heatmap/images/clicks_heatmap_2x.png 2x';
        } else if (this.state.heatmapMode === 'moving') {
            heatmapImage1X = '/heatmap/images/moving_heatmap_1x.png';
            heatmapImage2X = '/heatmap/images/moving_heatmap_2x.png 2x';
        } else {
            heatmapImage1X = '/heatmap/images/scroll_heatmap_1x.png';
            heatmapImage2X = '/heatmap/images/scroll_heatmap_2x.png 2x';
        }

        return (
            <div
                ref={this.handleHeatmapSectionRef}
                className='c42-page-header-level-2-plank__wrapper pt-md-5 mb-2 mb-md-5 border-top'
            >
                <div className='row pt-0 pt-md-5'>
                    <div className='col-md-7 px-md-7 px-sm-2'>
                        <div>
                            <img
                                srcSet={heatmapImage2X}
                                alt=""
                                src={heatmapImage1X}
                            />
                        </div>
                    </div>
                    <div className='col-md-5 px-md-5 px-sm-2'>
                        <div className='features_content__container'>
                            <div className='content__header'>
                                <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter fw-300'>
                                    Heatmaps
                                </h2>
                            </div>
                            <div className='content__description'>
                                <span>
                                    {'Heatmaps l?? c??ng c??? m???nh m??? v?? tr???c quan nh???t ????? t??m hi???u v??? h??nh vi kh??ch h??ng, h??? th?????ng click v??o v??? tr?? n??o, ???? cu???n ?????n ????u tr??n trang, v??ng n??o h??? ????? ?? v?? b??? qua v??ng n??o tr??n trang c???a b???n...'}
                                </span>
                            </div>
                            <div className='content__more'>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.heatmapMode === 'click',
                                    })}
                                    onClick={() => this.toggleHeatmapMode('click')}
                                >
                                    {'Clicks heatmap'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.heatmapMode === 'moving',
                                    })}
                                    onClick={() => this.toggleHeatmapMode('moving')}
                                >
                                    {'Moving heatmap'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.heatmapMode === 'scroll',
                                    })}
                                    onClick={() => this.toggleHeatmapMode('scroll')}
                                >
                                    {'Scroll heatmap'}
                                </div>
                                <hr/>
                                {this.renderHelpItem('https://docs.heatmap.com/docs/tao-heatmap.html', 'Xem th??m t??i li???u v??? heatmaps')}
                                {this.renderHelpItem('https://docs.heatmap.com/docs/phan-tich-ket-qua-heatmap.html', 'Ph??n t??ch k???t qu??? heatmaps')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    handleRecordingSectionRef = (r) => {this.recordingSection = r};
    handleRecordingVideoRef = (r) => {this.recordingVideo = r};

    renderFeatureRecording = () => {
        let recordingImage1X;
        let recordingImage2X;
        if (this.state.recordingMode === 'view') {
            recordingImage1X = '/heatmap/images/recordings_gif.gif';
            recordingImage2X = '/heatmap/images/recordings_gif.gif 2x';
        } else if (this.state.recordingMode === 'tag') {
            recordingImage1X = '/heatmap/images/recordings_1x.png';
            recordingImage2X = '/heatmap/images/recordings_2x.png 2x';
        } else {
            recordingImage1X = '/heatmap/images/recordings_2_1x.png';
            recordingImage2X = '/heatmap/images/recordings_2_2x.png 2x';
        }

        return (
            <div
                ref={this.handleRecordingSectionRef}
                className='c42-page-header-level-2-plank__wrapper pt-5 mb-2 mb-md-5 pt-md-5'
            >
                <div className='row pt-0 pt-md-5'>
                    <div className='col-md-5 px-md-5 px-sm-2'>
                        <div className='features_content__container'>
                            <div className='content__header'>
                                <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter fw-300'>
                                    Recordings
                                </h2>
                            </div>
                            <div className='content__description'>
                                {'Recordings ch??nh l?? c??ng c??? b??? sung s???c m???nh th??m cho heatmaps. Vi???c xem l???i c??c videos phi??n truy c???p'}
                                {' c???a kh??ch h??ng gi??p b???n hi???u s??u h??n v??? c??c v???n ????? m?? heatmaps th??? hi???n.'}
                            </div>
                            <div className='content__more'>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.recordingMode === 'view',
                                    })}
                                    onClick={() => this.toggleRecordingMode('view')}
                                >
                                    {'Xem l???i t???t c??? phi??n truy c???p'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.recordingMode === 'tag',
                                    })}
                                    onClick={() => this.toggleRecordingMode('tag')}
                                >
                                    {'Qu???n l?? phi??n v???i c??c nh??n'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.recordingMode === 'filter',
                                    })}
                                    onClick={() => this.toggleRecordingMode('filter')}
                                >
                                    {'B??? l???c chi ti???t & m???nh m???'}
                                </div>
                                <hr/>
                                {this.renderHelpItem('https://docs.heatmap.com/docs/xem-lai-video-phien-truy-cap.html', 'Xem th??m t??i li???u v??? recordings')}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 px-md-7 px-sm-2'>
                        <div>
                            <img
                                style={{width: '100%'}}
                                srcSet={recordingImage2X}
                                alt=""
                                src={recordingImage1X}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    handleABTestingSectionRef = (r) => {this.abTestingSection = r};

    toggleTestingMode = (mode) => {
        this.setState({testingMode: mode});
    };

    renderFeatureABTesting = () => {
        let testingImage1X;
        let testingImage2X;
        if (this.state.testingMode === 'edit') {
            testingImage1X = '/heatmap/images/abtesting_1_1x.png';
            testingImage2X = '/heatmap/images/abtesting_1_2x.png 2x';
        } else {
            testingImage1X = '/heatmap/images/abtesting_2_1x.png';
            testingImage2X = '/heatmap/images/abtesting_2_2x.png 2x';
        }

        return (
            <div
                ref={this.handleABTestingSectionRef}
                className='c42-page-header-level-2-plank__wrapper pt-5 mb-2 mb-md-5 pt-md-5'
            >
                <div className='row pt-0 pt-md-5'>
                    <div className='col-md-7 px-md-7 px-sm-2'>
                        <div>
                            <img
                                srcSet={testingImage2X}
                                alt=""
                                src={testingImage1X}
                            />
                        </div>
                    </div>
                    <div className='col-md-5 px-md-5 px-sm-2'>
                        <div className='features_content__container'>
                            <div className='content__header'>
                                <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter fw-300'>
                                    A/B Testings
                                </h2>
                            </div>
                            <div className='content__description'>
                                D??? d??ng t???o th??m m???t phi??n b???n th??? nghi???m c???a website v???i URL kh??ng thay ?????i. heatmap t??? ?????ng ph??n ph???i phi??n b???n v?? ????nh gi?? hi???u qu??? gi??p b???n.
                                <p>
                                    {'A/B Testing gi??p b???n tri???n khai nhanh b???t k??? m???t ?? t?????ng t???i ??u n??o cho website. B???n s??? nhanh ch??ng t??m ???????c phi??n b???n t???i ??u nh???t ch??? v???i v??i thao t??c ????n gi???n.'}
                                </p>
                            </div>
                            <div className='content__more'>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.testingMode === 'edit',
                                    })}
                                    onClick={() => this.toggleTestingMode('edit')}
                                >
                                    {'C??ng c??? ch???nh s???a linh ho???t'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.testingMode === 'view',
                                    })}
                                    onClick={() => this.toggleTestingMode('view')}
                                >
                                    {'Hi???n th??? k???t qu??? tr???c quan'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    toggleFeedbackMode = (mode) => {
        this.setState({feedbackMode: mode});
    };

    renderFeatureFeedback = () => {
        let feedbackImage1X;
        let feedbackImage2X;
        if (this.state.feedbackMode === 'display') {
            feedbackImage1X = '/heatmap/images/feedback_1_1x.png';
            feedbackImage2X = '/heatmap/images/feedback_2x.png 2x';
        } else {
            feedbackImage1X = '/heatmap/images/feedback_2_1x.png';
            feedbackImage2X = '/heatmap/images/feedback_2_2x.png 2x';
        }

        return (
            <div
                className='c42-page-header-level-2-plank__wrapper pt-5 mb-2 mb-md-5 pt-md-5'
            >
                <div className='row pt-0 pt-md-5'>
                    <div className='col-md-5 px-md-5 px-sm-2'>
                        <div className='features_content__container'>
                            <div className='content__header'>
                                <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter fw-300'>
                                    {'Ph???n h???i'}
                                </h2>
                            </div>
                            <div className='content__description'>
                                Ti???n ??ch gi??p b???n k???t n???i g???n h??n v???i kh??ch h??ng, l???ng nghe ?? ki???n ph???n h???i, v?? t??m hi???u c???m x??c c???a h??? v??? trang web c???a b???n.
                                <p>
                                    Thu th???p ?? ki???n ph???n h???i c???a kh??ch h??ng l?? c?? s??? t???t nh???t ????? b???n t???i ??u website.
                                </p>
                            </div>
                            <div className='content__more'>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.feedbackMode === 'display',
                                    })}
                                    onClick={() => this.toggleFeedbackMode('display')}
                                >
                                    {'T??y ch???nh hi???n th??? linh ho???t'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.feedbackMode === 'element',
                                    })}
                                    onClick={() => this.toggleFeedbackMode('element')}
                                >
                                    {'Ph???n h???i t???ng ph???n t???'}
                                </div>
                                <hr/>
                                {this.renderHelpItem('https://docs.heatmap.com/docs/tao-widget-thu-thap-phan-hoi.html', 'Xem th??m t??i li???u v??? ph???n h???i')}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 px-md-7 px-sm-2'>
                        <div>
                            <img
                                srcSet={feedbackImage2X}
                                alt=""
                                src={feedbackImage1X}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    togglePollMode = (mode) => {
        this.setState({pollMode: mode});
    };

    renderFeaturePoll = () => {
        let pollImage1X;
        let pollImage2X;
        if (this.state.pollMode === 'questions') {
            pollImage1X = '/heatmap/images/poll_1_1x.png';
            pollImage2X = '/heatmap/images/poll_1_2x.png 2x';
        } else {
            pollImage1X = '/heatmap/images/poll_2_1x.png';
            pollImage2X = '/heatmap/images/poll_2_2x.png 2x';
        }

        return (
            <div
                className='c42-page-header-level-2-plank__wrapper pt-5 mb-2 mb-md-5 pt-md-5'
            >
                <div className='row pt-0 pt-md-5'>
                    <div className='col-md-7 px-md-7 px-sm-2'>
                        <div>
                            <img
                                srcSet={pollImage2X}
                                alt=""
                                src={pollImage1X}
                            />
                        </div>
                    </div>
                    <div className='col-md-5 px-md-5 px-sm-2'>
                        <div className='features_content__container'>
                            <div className='content__header'>
                                <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter fw-300'>
                                    {'Th??m d??'}
                                </h2>
                            </div>
                            <div className='content__description'>
                                D??? d??ng ki???m ch???ng v?? th??? nghi???m b???t c??? m???t chi???n l?????c hay v???n ????? n??o ???? b???ng c??ch th??m d?? ?? ki???n c???a kh??ch h??ng.
                                <p>
                                    {'Th??m d?? ?? ki???n kh??ch h??ng s??? gi??p b???n hi???u kh??ch h??ng c???a m??nh v?? t???o ra c??c chi???n l?????c kinh doanh hi???u qu??? h??n.'}
                                </p>
                            </div>
                            <div className='content__more'>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.pollMode === 'questions',
                                    })}
                                    onClick={() => this.togglePollMode('questions')}
                                >
                                    {'05 d???ng c??u h???i kh??c nhau'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.pollMode === 'target',
                                    })}
                                    onClick={() => this.togglePollMode('target')}
                                >
                                    {'Target ?????n t???ng trang ri??ng bi???t'}
                                </div>
                                <hr/>
                                {this.renderHelpItem('https://docs.heatmap.com/docs/tao-widget-tham-do-y-kien.html', 'Xem th??m t??i li???u v??? th??m d??')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    toggleDashboardMode = (mode) => {
        this.setState({dashboardMode: mode});
    };

    renderFeatureDashboard = () => {
        let dashboardImage1X;
        let dashboardImage2X;
        if (this.state.dashboardMode === 'general') {
            dashboardImage1X = '/heatmap/images/dashboard_1_1x.png';
            dashboardImage2X = '/heatmap/images/dashboard_1_2x.png 2x';
        } else {
            dashboardImage1X = '/heatmap/images/dashboard_2_1x.png';
            dashboardImage2X = '/heatmap/images/dashboard_2_2x.png 2x';
        }

        return (
            <div
                className='c42-page-header-level-2-plank__wrapper pt-5 mb-2 mb-md-5 pt-md-5'
            >
                <div className='row pt-0 pt-md-5'>
                    <div className='col-md-5 px-md-5 px-sm-2'>
                        <div className='features_content__container'>
                            <div className='content__header'>
                                <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter fw-300'>
                                    {'B??o c??o'}
                                </h2>
                            </div>
                            <div className='content__description'>
                                D??? d??ng quan s??t hi???u qu??? c???a website th??ng qua B???ng ??i???u khi???n tr???c quan. N??i m?? b???n c?? th??? theo d??i di???n bi???n hi???u qu??? theo t???ng gi??? v?? t???ng ng??y ????? c?? nh???ng bi???n ph??p ??i???u ch???nh k???p th???i cho websites.
                            </div>
                            <div className='content__more'>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.dashboardMode === 'general',
                                    })}
                                    onClick={() => this.toggleDashboardMode('general')}
                                >
                                    {'K???t qu??? hi???n th??? chi ti???t'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.dashboardMode === 'dates',
                                    })}
                                    onClick={() => this.toggleDashboardMode('dates')}
                                >
                                    {'B??o c??o cho m???i th???i ??i???m'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 px-md-7 px-sm-2'>
                        <div>
                            <img
                                srcSet={dashboardImage2X}
                                alt=""
                                src={dashboardImage1X}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    handleHeroSectionRef = (r) => {this.heroSection = r};

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

    handleMobileNavOpenChange = (isOpen) => {
        this.setState({isMobileNavOpen: isOpen});
    };

    renderCTASection = () => {
        return (
            <section
                className='lf-grid-container lf-padding--xl lf-top-padding--xxl--medium lf-background-color--primary lf-grid-container--relative product-tour__section'
            >
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
                                    {'D??ng th??? mi???n ph??'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    render() {
        const {playing} = this.state;
        let videoStyle;
        let controlsStyle;
        if (playing) {
            videoStyle = {
                display: 'block',
            };

            controlsStyle = {
                display: 'none',
            };
        }

        return (
            <main>
                <Head
                    title='N???n t???ng ??o l?????ng Website & Landing page'
                />
                {this.state.isMobileNavOpen && this.renderMobileNav()}
                <HomeMasterBar
                    theme='white'
                    onMobileNavOpenChange={this.handleMobileNavOpenChange}
                    onRegisterFormToggle={this.handleRegisterFormToggle}
                    showBorder={true}
                />
                <div className="u01-header__space-saver"/>
                <div
                    ref={this.handleHeroSectionRef}
                    className='c42-page-header-level-2-plank'
                >
                    <figure className='c42-page-header-level-2-plank__video-container'>
                        <div
                            className='c42-page-header-level-2-plank__video c42-page-header-level-2-plank--not-autoplay'
                            style={videoStyle}
                        >
                            <video
                                ref={this.handleVideoRef}
                                controls
                                className="c42-page-header-level-2-plank__video-player"
                                playsInline
                                webkit-playsinline="true"
                            >
                                <source
                                    src="/heatmap/videos/features_1080.mp4"
                                    type="video/mp4"/>

                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div
                            onClick={this.handlePlayPause}
                            className='c42-page-header-level-2-plank__playpause c42-page-header-level-2-plank__image-wrapper'
                            style={controlsStyle}
                        >
                            <img
                                srcSet="/heatmap/images/features_2x.png 2x, /heatmap/images/features_1x.png 1x"
                                src="/heatmap/images/features_2x.png"
                                alt=""
                                className="c42-page-header-level-2-plank__image c42-page-header-level-2-plank__image--desktop"
                                height="auto" width="auto"/>
                            <img
                                srcSet="/heatmap/images/features_phone_2x.png 2x, /heatmap/images/features_phone_1x.png 1x"
                                src="/heatmap/images/features_phone_2x.png"
                                alt=""
                                className="c42-page-header-level-2-plank__image c42-page-header-level-2-plank__image--mobile"
                                height="auto" width="auto"/>
                        </div>
                        <figcaption className="c42-page-header-level-2-plank__video-description sr-only"/>
                    </figure>
                </div>
                {this.renderSummarySection()}
                {this.renderFeatureHeatmap()}
                {this.renderFeatureRecording()}
                {this.renderFeatureABTesting()}
                {this.renderFeatureFeedback()}
                {this.renderFeaturePoll()}
                {this.renderFeatureDashboard()}
                {this.renderCTASection()}
                <Footer theme='white'/>
                <Register
                    open={this.state.registerFormOpen}
                    forceOpen={this.state.forceRegisterOpen}
                    onClose={this.handleRegisterClose}
                    scrollTop={1000}
                    isScrolling={this.state.scrolling}
                    registerMode={this.state.registerMode}
                    onRegisterModeChange={this.handleRegisterModeChange}
                    isMobile={isMobile()}
                />
            </main>
        );
    }
}
