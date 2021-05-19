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
                                Công cụ thu thập & phân tích hành vi khách hàng chi tiết cho doanh nghiệp
                            </h2>
                            <div className='c42-page-header-level-2-plank__btn'>
                                <a href="https://app.heatmap.com/register_email"
                                   className="button button--primary button--medium button--medium--wide "
                                >
                                    Dùng thử miễn phí
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
                                    {'Heatmaps là công cụ mạnh mẽ và trực quan nhất để tìm hiểu về hành vi khách hàng, họ thường click vào vị trí nào, đã cuộn đến đâu trên trang, vùng nào họ để ý và bỏ qua vùng nào trên trang của bạn...'}
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
                                {this.renderHelpItem('https://docs.heatmap.com/docs/tao-heatmap.html', 'Xem thêm tài liệu về heatmaps')}
                                {this.renderHelpItem('https://docs.heatmap.com/docs/phan-tich-ket-qua-heatmap.html', 'Phân tích kết quả heatmaps')}
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
                                {'Recordings chính là công cụ bổ sung sức mạnh thêm cho heatmaps. Việc xem lại các videos phiên truy cập'}
                                {' của khách hàng giúp bạn hiểu sâu hơn về các vấn đề mà heatmaps thể hiện.'}
                            </div>
                            <div className='content__more'>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.recordingMode === 'view',
                                    })}
                                    onClick={() => this.toggleRecordingMode('view')}
                                >
                                    {'Xem lại tất cả phiên truy cập'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.recordingMode === 'tag',
                                    })}
                                    onClick={() => this.toggleRecordingMode('tag')}
                                >
                                    {'Quản lý phiên với các nhãn'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.recordingMode === 'filter',
                                    })}
                                    onClick={() => this.toggleRecordingMode('filter')}
                                >
                                    {'Bộ lọc chi tiết & mạnh mẽ'}
                                </div>
                                <hr/>
                                {this.renderHelpItem('https://docs.heatmap.com/docs/xem-lai-video-phien-truy-cap.html', 'Xem thêm tài liệu về recordings')}
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
                                Dễ dàng tạo thêm một phiên bản thử nghiệm của website với URL không thay đổi. heatmap tự động phân phối phiên bản và đánh giá hiệu quả giúp bạn.
                                <p>
                                    {'A/B Testing giúp bạn triển khai nhanh bất kỳ một ý tưởng tối ưu nào cho website. Bạn sẽ nhanh chóng tìm được phiên bản tối ưu nhất chỉ với vài thao tác đơn giản.'}
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
                                    {'Công cụ chỉnh sửa linh hoạt'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.testingMode === 'view',
                                    })}
                                    onClick={() => this.toggleTestingMode('view')}
                                >
                                    {'Hiển thị kết quả trực quan'}
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
                                    {'Phản hồi'}
                                </h2>
                            </div>
                            <div className='content__description'>
                                Tiện ích giúp bạn kết nối gần hơn với khách hàng, lắng nghe ý kiến phản hồi, và tìm hiểu cảm xúc của họ về trang web của bạn.
                                <p>
                                    Thu thập ý kiến phản hồi của khách hàng là cơ sở tốt nhất để bạn tối ưu website.
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
                                    {'Tùy chỉnh hiển thị linh hoạt'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.feedbackMode === 'element',
                                    })}
                                    onClick={() => this.toggleFeedbackMode('element')}
                                >
                                    {'Phản hồi từng phần tử'}
                                </div>
                                <hr/>
                                {this.renderHelpItem('https://docs.heatmap.com/docs/tao-widget-thu-thap-phan-hoi.html', 'Xem thêm tài liệu về phản hồi')}
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
                                    {'Thăm dò'}
                                </h2>
                            </div>
                            <div className='content__description'>
                                Dễ dàng kiểm chứng và thử nghiệm bất cứ một chiến lược hay vấn đề nào đó bằng cách thăm dò ý kiến của khách hàng.
                                <p>
                                    {'Thăm dò ý kiến khách hàng sẽ giúp bạn hiểu khách hàng của mình và tạo ra các chiến lược kinh doanh hiệu quả hơn.'}
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
                                    {'05 dạng câu hỏi khác nhau'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.pollMode === 'target',
                                    })}
                                    onClick={() => this.togglePollMode('target')}
                                >
                                    {'Target đến từng trang riêng biệt'}
                                </div>
                                <hr/>
                                {this.renderHelpItem('https://docs.heatmap.com/docs/tao-widget-tham-do-y-kien.html', 'Xem thêm tài liệu về thăm dò')}
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
                                    {'Báo cáo'}
                                </h2>
                            </div>
                            <div className='content__description'>
                                Dễ dàng quan sát hiệu quả của website thông qua Bảng điều khiển trực quan. Nơi mà bạn có thể theo dõi diễn biến hiệu quả theo từng giờ và từng ngày để có những biện pháp điều chỉnh kịp thời cho websites.
                            </div>
                            <div className='content__more'>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.dashboardMode === 'general',
                                    })}
                                    onClick={() => this.toggleDashboardMode('general')}
                                >
                                    {'Kết quả hiển thị chi tiết'}
                                </div>
                                <div
                                    role='button'
                                    className={classNames('features__tab', {
                                        active: this.state.dashboardMode === 'dates',
                                    })}
                                    onClick={() => this.toggleDashboardMode('dates')}
                                >
                                    {'Báo cáo cho mọi thời điểm'}
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
                                    {'Dùng thử miễn phí'}
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
                    title='Nền tảng đo lường Website & Landing page'
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
