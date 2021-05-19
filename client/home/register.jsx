import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {noop} from 'lodash';
import debounce from 'lodash.debounce';

import {Client4} from 'actions/client4';
import {setCSRFFromCookie} from 'actions/client4/utils';
import TextInput from 'components/text_input';
import Card from 'components/card';
import Button from 'components/button';
import config from 'config';
import './style.scss';

export default class Register extends React.PureComponent {
    static propTypes = {
        isScrolling: PropTypes.bool,
        scrollTop: PropTypes.number,
        registerMode: PropTypes.oneOf(['register', 'login']),
        onRegisterModeChange: PropTypes.func,
        onClose: PropTypes.func,
        open: PropTypes.bool,
        forceOpen: PropTypes.bool,
        isMobile: PropTypes.bool,
    };

    static defaultProps = {
        onRegisterModeChange: noop,
        onClose: noop,
    };

    constructor(props) {
        super(props);

        this.state = {
            registerMode: props.registerMode,
            registerData: this.getInitialRegisterData(),
            loginData: {
                email: '',
                password: '',
            },
        };
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if ((nextProps.open !== this.props.open && nextProps.open) ||
    //         nextProps.forceOpen !== this.props.forceOpen && nextProps.forceOpen ||
    //         nextProps.registerMode !== this.props.registerMode) {
    //         if (nextProps.registerMode === 'register') {
    //             if (this.emailInput) {
    //                 this.emailInput.focus();
    //             }
    //         } else {
    //             if (this.loginId) {
    //                 this.loginId.focus();
    //             }
    //         }
    //     }
    // }

    getInitialRegisterData = () => {
        return {
            email: '',
            username: '',
            mobile: '',
            password: '',
            confirm_password: '',
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.registerMode !== this.props.registerMode) {
            this.setState({registerMode: nextProps.registerMode})
        }
    }

    handleToggleRegisterMode = () => {
        let nextMode = this.state.registerMode;
        if (nextMode === 'register') {
            nextMode = 'login';
        } else {
            nextMode = 'register';
        }

        this.setState({registerMode: nextMode}, () => {
            this.props.onRegisterModeChange(nextMode);
        });
    };

    renderForm = () => {
        const {registerMode} = this.props;
        if (registerMode === 'register') {
            return this.renderRegisterForm();
        } else {
            return this.renderLoginForm();
        }
    };

    handleLoginRef = (r) => {
        this.loginId = r;
    };

    renderLoginForm = () => {
        return (
            <div className='register__form-wrapper'>
                <div>
                    <h3 className='title' style={{maxWidth: '90%'}}>
                        Đăng nhập hệ thống
                    </h3>
                </div>
                <div>
                    hoặc
                    {' '}
                    <a
                        href='https://app.heatmap.com/register'
                    >
                        Tạo tài khoản mới
                    </a>
                </div>
                <form
                    className='form__content'
                    onSubmit={this.doLogin}
                >
                    <div className='register__form'>
                        <TextInput
                            name='email'
                            ref={this.handleLoginRef}
                            autoFocus={true}
                            className='form__input register__input'
                            type='text'
                            placeholder='Email hoặc tên đăng nhập'
                            value={this.state.loginData.email}
                            onChange={this.handleLoginDataChange}
                            isError={Boolean(this.state.loginEmailError)}
                            error={this.state.loginEmailError}
                            disabled={this.state.isLogging}
                        />
                        <TextInput
                            name='password'
                            className='form__input register__input'
                            type='password'
                            placeholder='Mật khẩu'
                            value={this.state.loginData.password}
                            onChange={this.handleLoginDataChange}
                            disabled={this.state.isLogging}
                        />
                        {
                            this.state.loginError && (
                                <div>
                                    <Card
                                        isError={true}
                                    >
                                        {this.state.loginError}
                                    </Card>
                                </div>
                            )
                        }
                        <Button
                            type='submit'
                            isPrimary={true}
                            disabled={this.state.isLogging}
                            isLoading={this.state.isLogging}
                        >
                            Đăng nhập
                        </Button>
                    </div>
                </form>
            </div>
        );
    };

    handleLoginDataChange = async (name, value) => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                [name]: value,
            }
        });
    };

    doLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {email, password} = this.state.loginData;
        this.loginUser(email, password);
    };

    handleRegisterDataChange = async (name, value) => {
        this.setState({
            registerData: {
                ...this.state.registerData,
                [name]: value,
            }
        }, async () => {
            if (name === 'email') {
                this.debouncedCheckEmail(this.state.registerData.email);
            } else if (name === 'username') {
                this.debouncedCheckUsername(this.state.registerData.username);
            } else if (name === 'password') {
                this.debouncedCheckPassword(this.state.registerData.password);
                if (this.state.registerData.confirm_password && this.state.registerData.confirm_password.length > 0) {
                    this.debouncedCheckPasswordMatch(this.state.registerData.confirm_password);
                }
            } else if (name === 'confirm_password') {
                this.debouncedCheckPasswordMatch(this.state.registerData.confirm_password);
            }
        });
    };

    debouncedCheckEmail = debounce(this.checkEmail, 400);
    debouncedCheckUsername = debounce(this.checkUsername, 400);
    debouncedCheckPassword = debounce(this.checkPassword, 400);
    debouncedCheckPasswordMatch = debounce(this.checkPasswordMatch, 400);

    async checkEmail(value) {
        this.setState({emailError: null});
        let exist = null;
        try {
            exist = await Client4.checkEmailExist({email: value});
            if (exist && exist.message) {
                this.setState({emailError: exist.message});
            }
        } catch (error) {
            if (error && error.message) {
                this.setState({emailError: error.message});
            }
            return {error};
        }

        return {data: exist};
    };

    async checkUsername(value) {
        this.setState({usernameError: null});
        let exist = null;
        try {
            exist = await Client4.checkUsernameExist({username: value});
            if (exist && exist.message) {
                this.setState({usernameError: exist.message});
            }
        } catch (error) {
            return {error};
        }

        return {data: exist};
    };

    async checkPassword(value) {
        this.setState({passwordError: null});
        let exist = null;
        try {
            exist = await Client4.checkPasswordValid({password: value});
            if (exist && exist.message) {
                this.setState({passwordError: exist.message});
            }
        } catch (error) {
            if (error && error.message) {
                this.setState({passwordError: error.message});
            }
            return {error};
        }

        return {data: exist};
    };

    async checkPasswordMatch(value) {
        this.setState({passwordMatchError: null});
        if (value && value.length > 0 && this.state.registerData.password !== value) {
            this.setState({passwordMatchError: 'Mật khẩu không khớp. Vui lòng kiểm tra lại.'});
        }
    };

    isValidForCreateUser = () => {
        if (this.state.emailError || this.state.usernameError || this.state.passwordError || this.state.passwordMatchError) {
            return false;
        }

        const {
            email,
            username,
            password,
        } = this.state.registerData;

        if (!email || email.length === 0) {
            return false;
        }

        if (!username || username.length === 0) {
            return false;
        }

        if (!password || password.length === 0) {
            return false;
        }

        return true;
    };

    createUser = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({creatingUser: false, createUserError: null});

        if (!this.isValidForCreateUser()) {
            return;
        }

        this.setState({creatingUser: true});
        let created;
        try {
            created = await Client4.createUser(this.state.registerData);
        } catch (error) {
            if (error && error.message) {
                this.setState({createUserError: error.message});
            }
            return {error};
        }

        this.setState({creatingUser: false}, () => {
            this.handleSuccessCreate(created);
        });
        return {data: created};
    };

    handleSuccessCreate = async () => {
        await this.loginUser(this.state.registerData.email, this.state.registerData.password);
        this.setState({
            registerData: this.getInitialRegisterData(),
            emailError: null,
            usernameError: null,
            passwordError: null,
            passwordMatchError: null,
        });
    };

    loginUser = async (email, password) => {
        this.setState({loginError: false, isLogging: true});
        let response;
        try {
            response = await Client4.login(email, password);
        } catch (error) {
            if (error && error.message) {
                this.setState({loginError: error.message, isLogging: false});
            }
            return {error};
        }
        this.setState({isLogging: false});
        setCSRFFromCookie();
        Client4.setUserId(response.id);
        window.location.href = config( 'api_url' );
    };

    handleEmailRef = (r) => {
        this.emailInput = r;
    };

    renderRegisterForm = () => {
        return (
            <div className='register__form-wrapper'>
                <div>
                    <h3 className='title' style={{maxWidth: '90%'}}>
                        Đăng ký miễn phí
                    </h3>
                </div>
                <div>
                    hoặc
                    {' '}
                    <a
                        href='https://app.heatmap.com/login'
                    >
                        Đăng nhập
                    </a>
                    {' '}
                    nếu bạn đã có tài khoản.
                </div>
                <form
                    className='form__content'
                    onSubmit={this.createUser}
                >
                    <div className='register__form'>
                        <TextInput
                            ref={this.handleEmailRef}
                            autoFocus={true}
                            name='email'
                            type='email'
                            placeholder='Địa chỉ Email của bạn'
                            value={this.state.registerData.email}
                            onChange={this.handleRegisterDataChange}
                            isError={Boolean(this.state.emailError)}
                            error={this.state.emailError}
                            disabled={this.state.creatingUser}
                        />
                        <TextInput
                            name='username'
                            className='form__input register__input'
                            type='text'
                            placeholder='Tên đăng nhập'
                            value={this.state.registerData.username}
                            onChange={this.handleRegisterDataChange}
                            isError={Boolean(this.state.usernameError)}
                            error={this.state.usernameError}
                            disabled={this.state.creatingUser}
                        />
                        <TextInput
                            name='mobile'
                            className='form__input register__input'
                            type='text'
                            placeholder='Số điện thoại liên hệ'
                            value={this.state.registerData.mobile}
                            onChange={this.handleRegisterDataChange}
                            disabled={this.state.creatingUser}
                        />
                        <TextInput
                            name='password'
                            className='form__input register__input'
                            type='password'
                            placeholder='Mật khẩu'
                            value={this.state.registerData.password}
                            onChange={this.handleRegisterDataChange}
                            isError={Boolean(this.state.passwordError)}
                            error={this.state.passwordError}
                            disabled={this.state.creatingUser}
                        />
                        <TextInput
                            name='confirm_password'
                            className='form__input register__input'
                            type='password'
                            placeholder='Nhập lại mật khẩu'
                            value={this.state.registerData.confirm_password}
                            onChange={this.handleRegisterDataChange}
                            isError={Boolean(this.state.passwordMatchError)}
                            error={this.state.passwordMatchError}
                            disabled={this.state.creatingUser}
                        />
                        <div className='terms'>
                            Bằng việc đăng ký tài khoản, bạn đã đồng ý với các
                            {' '}
                            <strong>
                                <a
                                    href='/terms'
                                >
                                    Điều khoản sử dụng
                                </a>
                            </strong>
                            {' '}
                            và
                            {' '}
                            <strong>
                                <a
                                    href='/privacy'
                                >
                                    Chính sách dữ liệu
                                </a>
                            </strong>
                            {' '}
                            của heatmap.
                        </div>
                        {
                            this.state.createUserError && (
                                <div>
                                    <Card
                                        isError={true}
                                    >
                                        {this.state.createUserError}
                                    </Card>
                                </div>
                            )
                        }
                        <Button
                            type='submit'
                            isPrimary={true}
                            disabled={this.state.creatingUser}
                            isLoading={this.state.creatingUser}
                        >
                            Đăng ký tài khoản
                        </Button>
                    </div>
                </form>
            </div>
        );
    };

    render() {
        const {
            registerMode,
            scrollTop,
            open,
            forceOpen,
        } = this.props;

        let loginText;
        if (registerMode === 'register') {
            loginText = 'Đăng nhập';
        } else {
            loginText = 'Đăng ký';
        }

        return (
            <div
                className={classNames('register__wrapper', {
                    'closed': !open && (scrollTop && scrollTop >= 400),
                    'force__open': forceOpen,
                    'is-mobile': this.props.isMobile,
                })}
            >
                <section className='register__section'>
                    <nav>
                        <button
                            id='sign_up_in'
                            className='header__button header__button-link register__header-button'
                            onClick={this.handleToggleRegisterMode}
                        >
                            {loginText}
                        </button>
                        <button
                            onClick={this.props.onClose}
                            id="close-panel"
                            className="header__button-close header__button-link register__header-button ob-button ob-button--close button--visible"
                        >
                            Close
                        </button>
                    </nav>
                    {this.renderForm()}
                </section>
            </div>
        )
    }
}
