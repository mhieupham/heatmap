
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import heatmapLogoWhite from 'assets/images/heatmap_logo_white.svg';

import './style.scss';

const NavigationLink = styled.a`
    font-family: 'Atlas Grotesk Web', 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.625em;
    height: auto;
    width: auto;
    padding: 8px 50px;
    display: inline-block;
    justify-content: center;
    align-self: flex-start;
    text-align: center;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
    margin-left: 0;
    margin-right: 0;
    padding: 10px 15px;
    font-family: 'SharpGrotesk', sans-serif;
    font-weight: 300;
    color: #fff;
    
    &:hover {
        text-decoration: underline;
        color: #fff;
    }
`;

const NavigationLinks = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: row;
`;

import Masterbar from './masterbar';

export default class MasterbarLoggedOut extends PureComponent {
    render() {
        return (
            <Masterbar>
                <div className='masterbar__wrapper'>
                    <nav className='masterbar__content'>
                        <div className='logo__wrapper'>
                            <img
                                style={{height: 46}}
                                src={heatmapLogoWhite}
                            />
                        </div>
                        <div className='navigation'>
                            <div>
                                <NavigationLink>
                                    Tính năng
                                </NavigationLink>
                                <NavigationLink>
                                    Bảng giá
                                </NavigationLink>
                            </div>
                            <NavigationLinks>
                                sdfsdfdf
                            </NavigationLinks>
                        </div>
                    </nav>
                </div>
            </Masterbar>
        )
    }
}