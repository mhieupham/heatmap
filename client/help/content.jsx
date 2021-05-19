import React from 'react';
import ReactDOM from 'react-dom';
import {
    requestAnimationTimeout,
    cancelAnimationTimeout,
} from 'react-virtualized/dist/commonjs/utils/requestAnimationTimeout';

import Head from 'components/data/document_head';
import HomeMasterbar from 'home/masterbar';
import Register from 'home/register';
import Footer from 'layout/footer';

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
        this.setState({registerMode: mode, registerFormOpen: true});
    };

    handleRegisterClose = () => {
        this.setState({registerFormOpen: false})
    };

    render() {
        return (
            <main className='grid-990'>
                <Head
                    title='Nền tảng đo lường Website & Landing page'
                />
                <HomeMasterbar
                    theme='white'
                    onMobileNavOpenChange={this.handleMobileNavOpenChange}
                    onRegisterFormToggle={this.handleRegisterFormToggle}
                    showBorder={true}
                />
                <Register
                    open={this.state.registerFormOpen}
                    onClose={this.handleRegisterClose}
                    scrollTop={1000}
                    isScrolling={this.state.scrolling}
                    registerMode={this.state.registerMode}
                    onRegisterModeChange={this.handleRegisterModeChange}
                />
                <div className="u01-header__space-saver"/>
                <div className='pricing__pricing-container'>
                    <div className='twelve-column'>
                        <section className='pricing-container'>
                            <div className='pricing'>
                                asdfasdf
                            </div>
                        </section>
                    </div>
                </div>
                <Footer theme='white'/>
            </main>
        );
    }
}