import React from 'react';
import PropTypes from 'prop-types';
import '../css/Login.css';
import { connect } from 'react-redux';
import { USER_EMAIL } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    const { history, UserReducer } = this.props;
    const { email } = this.state;
    UserReducer(email);
    history.push('/carteira');
  }

  validateEmail() {
    const { email } = this.state;
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    return (
      <div className="body">
        <div className="container">
          <div className="form-container sign-in-container">
            <div className="main-container">
              <h1>Sign In</h1>
              <input
                data-testid="email-input"
                onChange={ this.handleChange }
                type="text"
                name="email"
                value={ email }
                placeholder="Insira seu email"
                className="input-login"
              />
              <input
                data-testid="password-input"
                onChange={ this.handleChange }
                type="password"
                name="password"
                value={ password }
                placeholder="Insira sua senha"
                className="input-login"
              />
              <button
                type="button"
                disabled={ !this.validateEmail()
                  || password.length < MIN_PASSWORD_LENGTH }
                onClick={ this.onClickBtn }
                className="button-login"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  UserReducer: (state) => dispatch(USER_EMAIL(state)) });

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  UserReducer: PropTypes.func.isRequired,
};
