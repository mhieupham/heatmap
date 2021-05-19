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
                <div className='what-is-heatmap__container py-md-5'>
                    <div className='twelve-column'>
                        <section className='pricing-container'>
                            <div className='pricing'>
                                <h2 className='c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter'>
                                    Bạn đã bao giờ nhìn thấy các hình ảnh này chưa?
                                </h2>
                                <ImagesGrid>
                                    <div>
                                        <img
                                            alt="Heatmap một cơn bão"
                                            src="/heatmap/images/storm_heatmap.gif"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt="Heatmap giao thông"
                                            src="/heatmap/images/traffic_heatmap.jpg"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt="Heatmap trong cửa hàng"
                                            src="/heatmap/images/store_heatmap.jpg"
                                        />
                                    </div>
                                </ImagesGrid>
                                <ContentWrapper>
                                    <p>
                                        <strong>
                                            {'Bức ảnh thứ nhất: '}
                                        </strong>
                                        {'Đây là một heatmap, heatmap này thể hiện một cơn bão, vùng gần tâm bão có màu “nóng” hơn vùng ở xa.'}
                                    </p>
                                    <p>
                                        <strong>
                                            {'Bức ảnh thứ hai: '}
                                        </strong>
                                        {'Đây là một heatmap, heatmap này thể hiện sự chênh lệch về lưu lượng giao thông tại một nút giao. Cụ thể hơn, hướng giao thông từ góc trái trên xuống góc phải dưới có mật độ xe cộ đi lại nhiều hơn.'}
                                    </p>
                                    <p>
                                        <strong>
                                            {'Bức ảnh thứ ba: '}
                                        </strong>
                                        {'Đây cũng là một heatmap, heatmap này thể hiện vị trí trong một cửa hàng bán quần áo được nhiều khách hàng thường hay lui tới hơn.'}
                                    </p>
                                    <h3>
                                        {'Vậy heatmap là gì?'}
                                    </h3>
                                    <p>
                                        {'Heatmap là một biểu đồ mô tả sự chênh lệch về một giá trị so sánh nào đó bằng các gam màu khác nhau.'}
                                        {' '}
                                        {'Có nhiều thang màu được sử dụng để thể hiện sự chênh lệch trong heatmap, nhưng nhìn chung các vùng có giá trị lớn hơn thường được biểu diễn bằng gam màu nóng hơn.'}
                                    </p>
                                    <p>
                                        <strong>{'Trong lĩnh vực đo lường websites — '}</strong>
                                        {'Heatmap được dùng để phân biệt mức độ quan tâm của khách truy cập của một website theo từng vùng. Vùng nào trên website nhận được nhiều sự quan tâm của khách hàng '}
                                        {'và vùng nào ít, từ đó người sở hữu website sẽ có các biện pháp tối ưu cần thiết để gia tăng tỷ lệ chuyển đổi.'}
                                    </p>
                                    <h3>
                                        {'3 dạng heatmaps phổ biến của websites'}
                                    </h3>
                                    <HeatmapTypeRow>
                                        <div>
                                            <h4 className='fw-700 mt-0'>
                                                {'Clicks heatmap'}
                                            </h4>
                                            <p>
                                                {'Biểu đồ nhiệt thể hiện các vị trí click chuột trên máy tính, hoặc chạm màn hình (tap) trên các thiết bị di động'}
                                            </p>
                                            <p>
                                                {'Clicks heatmap được ứng dụng để đo lường xem liệu người dùng có click vào các liên kết, các nút bấm hoặc các CTAs mà bạn đã đặt không?'}
                                            </p>
                                            <p>
                                                <strong>
                                                    {'MỘT: '}
                                                </strong>
                                                {'Nếu bạn đặt một nút "Mua hàng" trên trang, nhưng người dùng hầu như không bao giờ Click vào nó, thì rõ ràng nó đã được đặt không đúng nơi cần đặt.'}
                                            </p>
                                            <p>
                                                <strong>
                                                    {'HAI: '}
                                                </strong>
                                                {'Nếu một vị trí nhận được nhiều sự quan tâm của khách truy cập, nhưng bạn chưa có một nút bấm CTAs nào ở vị trí đó, rõ ràng bạn nên nhanh chóng bổ sung vào, chắc chắn lượng chuyển đổi sẽ tăng lên đáng kể.'}
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
                                                {'Biểu đồ nhiệt thể hiện các vị trí di chuyển chuột trên máy tính.'}
                                                {' '}
                                                {'Theo một nghiên cứu đã được kiểm chứng thì vị trí mà người dùng đặt con trỏ chuột đúng với vị trí mà mắt họ đang để ý đến khoảng 90%.'}
                                            </p>
                                            <p>
                                                {'Điều này cũng khá dễ hiểu, mọi người có xu hướng vừa đọc nội dung trên trang web và vừa di chuyển con trỏ chuột, thông thường họ đọc đến đâu thì con trỏ sẽ được chuyển đến vị trí đó.'}
                                            </p>
                                            <p>
                                                {'Vì vậy biểu đồ di chuột sẽ phản ánh khá chính xác những mức độ quan tâm của người dùng đến từng vùng trên website của bạn'}
                                            </p>
                                        </div>
                                    </HeatmapTypeRow>
                                    <HeatmapTypeRow>
                                        <div>
                                            <h4 className='fw-700 mt-0'>
                                                {'Scroll heatmap'}
                                            </h4>
                                            <p>
                                                {'Biểu đồ nhiệt thể hiện mức độ cuộn trang theo chiều sâu'}
                                                {' '}
                                                {'Scroll heatmaps sẽ cho bạn biết bao nhiêu phần trăm người dùng đã cuộn đến một vị trí nào đó trên trang. Khi di chuyển con trỏ đến một vị trí bất kề trên heatmap, bạn sẽ nhìn thấy giá trị này.'}
                                            </p>
                                            <p>
                                                {'Scroll heatmaps còn cho bạn biết giá trị kích thước màn hình trung bình của khách truy cập trang, đây là giá trị chiều cao trình duyệt trung bình của tất cả các phiên truy cập trong heatmap. Đây là vùng mà hầu hết khách hàng sẽ xem, vì nó là phần xuất hiện đầu tiên khi người dùng truy cập trang của bạn.'}
                                            </p>
                                            <p>
                                                {'Con số này rất quan trọng, bạn cần phải biết kích thước trung bình của trình duyệt để quyết định đặt những nôi dung quan trọng nhất ở đây, nếu nội dung quan trọng của bạn nằm ở ngoài vùng này có nghĩa là tỷ lệ tiếp cận của nó sẽ giảm xuống.'}
                                            </p>
                                            <p>
                                                {'Hiểu được hành vi cuộn trang của người dùng, bạn sẽ tránh được các lỗi bố trí những nội dung quan trọng vào các '}
                                                <strong>{'Điểm mù'}</strong>
                                                {' '}
                                                {'trên websites. Điểm mù là những vùng mà hầu hết người dùng không xem hoặc không để mắt tới nó bao giờ.'}
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
