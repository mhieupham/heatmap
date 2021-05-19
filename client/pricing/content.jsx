import React from 'react';

import PricingBlock from 'heatmap-ui/lib/blocks/pricing';

import Head from 'components/data/document_head';
import HomeMasterbar, {MobileNav} from 'home/masterbar';
import Register from 'home/register';
import Footer from 'layout/footer';
import config from 'config';
import {isMobile} from 'utils/user_agent';

import './style.scss';

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
        };
    }

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

    togglePlanModal = () => {
        window.open(`https://app.heatmap.com/register_email`);
    };

    toggleSupport = () => {
        window.open(`https://m.me/heatmap`);
    };

    render() {
        return (
            <main className='grid-990'>
                <Head
                    title='Nền tảng đo lường Website & Landing page'
                />
                {this.state.isMobileNavOpen && this.renderMobileNav()}
                <HomeMasterbar
                    theme='white'
                    onMobileNavOpenChange={this.handleMobileNavOpenChange}
                    onRegisterFormToggle={this.handleRegisterFormToggle}
                    showBorder={true}
                />
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
                <div className="u01-header__space-saver"/>
                <PricingBlock
                    staticServerUrl={config('tracking_url')}
                    onStandardClick={() => this.togglePlanModal('standard')}
                    onPremiumClick={() => this.togglePlanModal('premium')}
                    onAgenciesClick={this.toggleSupport}
                />
                <div className='customer-quote'>
                    <div className='customer-quote__cell'>
                        <div className='customer-quote__content'>
                            <div className='try-business-cta'>
                                <h3 className="try-business-cta__header">
                                    {'Bắt đầu đo lường websites ngay hôm nay'}
                                </h3>
                                <a className="btn btn-primary btn-lg try-business-cta__button" href="https://app.heatmap.com/register_email"
                                   data-trackingid="biz_prefooter_try"
                                >
                                    {'Dùng thử miễn phí'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer theme='white'/>
            </main>
        );
    }
}
