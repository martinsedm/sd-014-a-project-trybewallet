import React from 'react';
import '../styles/login.css';
import PropTypes from 'prop-types';
import LoginComplement from './LoginComplement';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isValid: false,
      /* message: '', */
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const MIN_CHARACTERS = 6;
      const MIN_PASSWORD = password.length >= MIN_CHARACTERS;
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
      if (MIN_PASSWORD && emailRegex) {
        this.setState({ isValid: true });
      } else {
        this.setState({ isValid: false });
      }
    });
  }

  handleLogin() {
    const { history } = this.props;
    history.push('/wallet');
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <div className="login-field">
        <form>
          <h2>Login</h2>
          <label htmlFor="email">
            <input
              placeholder="E-mail"
              data-testid="email-input"
              onChange={ this.handleChange }
              type="email"
              value={ email }
              id="email"
              name="email"
              className="form-control"
            />
          </label>
          <label htmlFor="password">
            <input
              className="form-control"
              placeholder="Password"
              data-testid="password-input"
              onChange={ this.handleChange }
              type="password"
              id="password"
              name="password"
              value={ password }
            />
          </label>
          <button
            disabled={ !isValid }
            type="submit"
            onClick={ this.handleLogin }
            className="btn btn-primary btn-block"
          >
            Entrar
          </button>
          <LoginComplement />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  /*  onEmailSubmit: PropTypes.func.isRequired, */
};
