import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.PureComponent {
    static propTypes = {
        theme: PropTypes.oneOf(['black', 'white']),
    };

    static defaultProps = {
        theme: 'black',
    };

    render() {
        let background = '#000';
        let color = '#fff';
        if (this.props.theme === 'white') {
            background = '#fff';
            color = 'inherit';
        }

        let logoImage;
        if (this.props.theme === 'white') {
            logoImage = '/heatmap/images/logo_world_mark_black.svg';
        } else {
            logoImage = '/heatmap/images/logo_world_mark_white.svg';
        }

        return (
            <section className='footer' style={{background: background, color: color}}>
                <div className='footer__container'>
                    <div className='footer__logo'>
                        <div className='footer__headline'>
                            <img
                                style={{width: 102}}
                                src={logoImage}
                            />
                        </div>
                    </div>
                    <div className='footer__content'>
                        <ul className='footer__link-list company__info'>
                            <li className='footer__link-list-item'>
                                <div className='footer__company-row'>
                                    <strong>{'Trụ sở: '}</strong>
                                    <span>
                                        {'Số 16 Ngõ 234 Hoàng Quốc Việt - Hà Nội, Việt Nam'}
                                    </span>
                                </div>
                                <div className='footer__company-row'>
                                    <strong>{'Văn phòng: '}</strong>
                                    <span>
                                        {'808 - Xuân Mai Complex - Hà Đông - Hà Nội, Việt Nam'}
                                    </span>
                                </div>
                                <div className='footer__company-row'>
                                    <strong>{'Mobile: '}</strong>
                                    <span>
                                        {'0348 686837'}
                                    </span>
                                </div>
                                <div className='footer__company-row'>
                                    <strong>{'Email: '}</strong>
                                    <span>
                                        {'contact@heatmap.com'}
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <ul className='footer__group-list'>
                            <li className='footer__group-list-item'>
                                <div className='footer__headline'>
                                    {'Sản phẩm'}
                                </div>
                                <ul className='footer__link-list'>
                                    <li className='footer__link-list-item'>
                                        <a href='/heatmap-la-gi' className='footer__link'>{'Heatmap là gì?'}</a>
                                    </li>
                                    <li className='footer__link-list-item'>
                                        <a href='/features' className='footer__link'>Giới thiệu tính năng</a>
                                    </li>
                                    <li className='footer__link-list-item'>
                                        <a href='/pricing' className='footer__link'>Bảng giá sử dụng</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='footer__group-list-item'>
                                <div className='footer__headline'>
                                    {'Trợ giúp'}
                                </div>
                                <ul className='footer__link-list'>
                                    <li className='footer__link-list-item'>
                                        <a
                                            href='https://blog.heatmap.com'
                                            className='footer__link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {'heatmap blog'}
                                        </a>
                                    </li>
                                    <li className='footer__link-list-item'>
                                        <a
                                            href='https://docs.heatmap.com'
                                            className='footer__link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {'Tài liệu hướng dẫn'}
                                        </a>
                                    </li>
                                    <li className='footer__link-list-item'>
                                        <a
                                            href='https://facebook.com/heatmap'
                                            className='footer__link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {'Cộng đồng heatmap'}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='footer__group-list-item'>
                                <div className='footer__headline'>
                                    {'Chính sách'}
                                </div>
                                <ul className='footer__link-list'>
                                    <li className='footer__link-list-item'>
                                        <a href='/terms' className='footer__link'>Điều khoản sử dụng</a>
                                    </li>
                                    <li className='footer__link-list-item'>
                                        <a href='/privacy' className='footer__link'>Chính sách bảo mật</a>
                                    </li>
                                    <li className='footer__link-list-item'>
                                        <a href='https://m.me/heatmap' className='footer__link'>Liên hệ chúng tôi</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__sub-footer'>
                        <div className='footer__border' style={{borderBottom: '1px solid var(--color-muted)'}}/>
                        <span>
                            Copyright ©  2018-2019 heatmap Company. All rights reserved.
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}
