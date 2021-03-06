import React from 'react';
import styled from 'styled-components';

import Head from 'components/data/document_head';
import HomeMasterbar, {MobileNav} from 'home/masterbar';
import Register from 'home/register';
import Footer from 'layout/footer';

import {media} from '../utils';
import {isMobile} from 'utils/user_agent';
import './style.scss';
import {FormattedMessage} from "react-intl";

const ImagesGrid = styled.div`
    display: grid;
    grid-auto-rows: auto;
    grid-auto-columns: max-content;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    margin-top: 2.5rem;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    
    img {
        box-shadow: 0 0 0 1px rgba(29,28,29,0.13), 0 4px 12px 0 rgba(0,0,0,0.12);
    }
    
    ${media.lessThan('medium')} {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`;

const ContentWrapper = styled.div`
    margin-top: 50px;
    
    ${media.lessThan('medium')} {
        margin-top: 30px;
    }
`;

const HeatmapTypeRow = styled.div`
    display: grid;
    grid-template-areas: "image content";
    grid-template-columns: 50% 50%;
    margin-top: 2.5rem;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    
    ${media.lessThan('medium')} {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }
    
    img {
        box-shadow: 0 0 0 1px rgba(29,28,29,0.13), 0 4px 12px 0 rgba(0,0,0,0.12);
    }
`;

const HEADER_HEIGHT = 90;

export default class WhatIsHeatmap extends React.PureComponent {
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
        return (
            <main className='grid-990'>
                <Head
                    title='N???n t???ng ??o l?????ng Website & Landing page'
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
                <div className='what-is-heatmap__container py-md-5'>
                    <div className='twelve-column'>
                        <section className='pricing-container'>
                            <div className='pricing'>
                                <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter'>
                                    B???n ???? bao gi??? nh??n th???y c??c h??nh ???nh n??y ch??a?
                                </h2>
                                <ImagesGrid>
                                    <div>
                                        <img
                                            alt="Heatmap m???t c??n b??o"
                                            src="/heatmap/images/storm_heatmap.gif"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt="Heatmap giao th??ng"
                                            src="/heatmap/images/traffic_heatmap.jpg"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt="Heatmap trong c???a h??ng"
                                            src="/heatmap/images/store_heatmap.jpg"
                                        />
                                    </div>
                                </ImagesGrid>
                                <ContentWrapper>
                                    <p>
                                        <strong>
                                            {'B???c ???nh th??? nh???t: '}
                                        </strong>
                                        {'????y l?? m???t heatmap, heatmap n??y th??? hi???n m???t c??n b??o, v??ng g???n t??m b??o c?? m??u ???n??ng??? h??n v??ng ??? xa.'}
                                    </p>
                                    <p>
                                        <strong>
                                            {'B???c ???nh th??? hai: '}
                                        </strong>
                                        {'????y l?? m???t heatmap, heatmap n??y th??? hi???n s??? ch??nh l???ch v??? l??u l?????ng giao th??ng t???i m???t n??t giao. C??? th??? h??n, h?????ng giao th??ng t??? g??c tr??i tr??n xu???ng g??c ph???i d?????i c?? m???t ????? xe c??? ??i l???i nhi???u h??n.'}
                                    </p>
                                    <p>
                                        <strong>
                                            {'B???c ???nh th??? ba: '}
                                        </strong>
                                        {'????y c??ng l?? m???t heatmap, heatmap n??y th??? hi???n v??? tr?? trong m???t c???a h??ng b??n qu???n ??o ???????c nhi???u kh??ch h??ng th?????ng hay lui t???i h??n.'}
                                    </p>
                                    <h3>
                                        {'V???y heatmap l?? g???'}
                                    </h3>
                                    <p>
                                        {'Heatmap l?? m???t bi???u ????? m?? t??? s??? ch??nh l???ch v??? m???t gi?? tr??? so s??nh n??o ???? b???ng c??c gam m??u kh??c nhau.'}
                                        {' '}
                                        {'C?? nhi???u thang m??u ???????c s??? d???ng ????? th??? hi???n s??? ch??nh l???ch trong heatmap, nh??ng nh??n chung c??c v??ng c?? gi?? tr??? l???n h??n th?????ng ???????c bi???u di???n b???ng gam m??u n??ng h??n.'}
                                    </p>
                                    <p>
                                        <strong>{'Trong l??nh v???c ??o l?????ng websites ??? '}</strong>
                                        {'Heatmap ???????c d??ng ????? ph??n bi???t m???c ????? quan t??m c???a kh??ch truy c???p c???a m???t website theo t???ng v??ng. V??ng n??o tr??n website nh???n ???????c nhi???u s??? quan t??m c???a kh??ch h??ng '}
                                        {'v?? v??ng n??o ??t, t??? ???? ng?????i s??? h???u website s??? c?? c??c bi???n ph??p t???i ??u c???n thi???t ????? gia t??ng t??? l??? chuy???n ?????i.'}
                                    </p>
                                    <h3>
                                        {'3 d???ng heatmaps ph??? bi???n c???a websites'}
                                    </h3>
                                    <HeatmapTypeRow>
                                        <div>
                                            <h4 className='fw-700 mt-0'>
                                                {'Clicks heatmap'}
                                            </h4>
                                            <p>
                                                {'Bi???u ????? nhi???t th??? hi???n c??c v??? tr?? click chu???t tr??n m??y t??nh, ho???c ch???m m??n h??nh (tap) tr??n c??c thi???t b??? di ?????ng'}
                                            </p>
                                            <p>
                                                {'Clicks heatmap ???????c ???ng d???ng ????? ??o l?????ng xem li???u ng?????i d??ng c?? click v??o c??c li??n k???t, c??c n??t b???m ho???c c??c CTAs m?? b???n ???? ?????t kh??ng?'}
                                            </p>
                                            <p>
                                                <strong>
                                                    {'M???T: '}
                                                </strong>
                                                {'N???u b???n ?????t m???t n??t "Mua h??ng" tr??n trang, nh??ng ng?????i d??ng h???u nh?? kh??ng bao gi??? Click v??o n??, th?? r?? r??ng n?? ???? ???????c ?????t kh??ng ????ng n??i c???n ?????t.'}
                                            </p>
                                            <p>
                                                <strong>
                                                    {'HAI: '}
                                                </strong>
                                                {'N???u m???t v??? tr?? nh???n ???????c nhi???u s??? quan t??m c???a kh??ch truy c???p, nh??ng b???n ch??a c?? m???t n??t b???m CTAs n??o ??? v??? tr?? ????, r?? r??ng b???n n??n nhanh ch??ng b??? sung v??o, ch???c ch???n l?????ng chuy???n ?????i s??? t??ng l??n ????ng k???.'}
                                            </p>
                                        </div>
                                        <div>
                                            <img
                                                alt="Clicks heatmap"
                                                src="/heatmap/images/1-click-heatmap.jpg"
                                            />
                                        </div>
                                    </HeatmapTypeRow>
                                    <HeatmapTypeRow>
                                        <div>
                                            <img
                                                alt="Moving heatmap"
                                                src="/heatmap/images/2-moving-heatmap.jpg"
                                            />
                                        </div>
                                        <div>
                                            <h4 className='fw-700 mt-0'>
                                                {'Moving heatmap'}
                                            </h4>
                                            <p>
                                                {'Bi???u ????? nhi???t th??? hi???n c??c v??? tr?? di chuy???n chu???t tr??n m??y t??nh.'}
                                                {' '}
                                                {'Theo m???t nghi??n c???u ???? ???????c ki???m ch???ng th?? v??? tr?? m?? ng?????i d??ng ?????t con tr??? chu???t ????ng v???i v??? tr?? m?? m???t h??? ??ang ????? ?? ?????n kho???ng 90%.'}
                                            </p>
                                            <p>
                                                {'??i???u n??y c??ng kh?? d??? hi???u, m???i ng?????i c?? xu h?????ng v???a ?????c n???i dung tr??n trang web v?? v???a di chuy???n con tr??? chu???t, th??ng th?????ng h??? ?????c ?????n ????u th?? con tr??? s??? ???????c chuy???n ?????n v??? tr?? ????.'}
                                            </p>
                                            <p>
                                                {'V?? v???y bi???u ????? di chu???t s??? ph???n ??nh kh?? ch??nh x??c nh???ng m???c ????? quan t??m c???a ng?????i d??ng ?????n t???ng v??ng tr??n website c???a b???n'}
                                            </p>
                                        </div>
                                    </HeatmapTypeRow>
                                    <HeatmapTypeRow>
                                        <div>
                                            <h4 className='fw-700 mt-0'>
                                                {'Scroll heatmap'}
                                            </h4>
                                            <p>
                                                {'Bi???u ????? nhi???t th??? hi???n m???c ????? cu???n trang theo chi???u s??u'}
                                                {' '}
                                                {'Scroll heatmaps s??? cho b???n bi???t bao nhi??u ph???n tr??m ng?????i d??ng ???? cu???n ?????n m???t v??? tr?? n??o ???? tr??n trang. Khi di chuy???n con tr??? ?????n m???t v??? tr?? b???t k??? tr??n heatmap, b???n s??? nh??n th???y gi?? tr??? n??y.'}
                                            </p>
                                            <p>
                                                {'Scroll heatmaps c??n cho b???n bi???t gi?? tr??? k??ch th?????c m??n h??nh trung b??nh c???a kh??ch truy c???p trang, ????y l?? gi?? tr??? chi???u cao tr??nh duy???t trung b??nh c???a t???t c??? c??c phi??n truy c???p trong heatmap. ????y l?? v??ng m?? h???u h???t kh??ch h??ng s??? xem, v?? n?? l?? ph???n xu???t hi???n ?????u ti??n khi ng?????i d??ng truy c???p trang c???a b???n.'}
                                            </p>
                                            <p>
                                                {'Con s??? n??y r???t quan tr???ng, b???n c???n ph???i bi???t k??ch th?????c trung b??nh c???a tr??nh duy???t ????? quy???t ?????nh ?????t nh???ng n??i dung quan tr???ng nh???t ??? ????y, n???u n???i dung quan tr???ng c???a b???n n???m ??? ngo??i v??ng n??y c?? ngh??a l?? t??? l??? ti???p c???n c???a n?? s??? gi???m xu???ng.'}
                                            </p>
                                            <p>
                                                {'Hi???u ???????c h??nh vi cu???n trang c???a ng?????i d??ng, b???n s??? tr??nh ???????c c??c l???i b??? tr?? nh???ng n???i dung quan tr???ng v??o c??c '}
                                                <strong>{'??i???m m??'}</strong>
                                                {' '}
                                                {'tr??n websites. ??i???m m?? l?? nh???ng v??ng m?? h???u h???t ng?????i d??ng kh??ng xem ho???c kh??ng ????? m???t t???i n?? bao gi???.'}
                                            </p>
                                        </div>
                                        <div>
                                            <img
                                                alt="Scroll heatmap"
                                                src="/heatmap/images/3-scroll-heatmap.jpg"
                                            />
                                        </div>
                                    </HeatmapTypeRow>
                                </ContentWrapper>
                            </div>
                        </section>
                    </div>
                </div>
                {this.renderCTASection()}
                <Footer theme='white'/>
            </main>
        );
    }
}
