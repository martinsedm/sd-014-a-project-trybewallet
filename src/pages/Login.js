import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStateLogin as saveStateLoginAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      habilit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const CARACTER_MIN = 5;
      const PASSWORD = password.length > CARACTER_MIN;
      console.log(PASSWORD);
      const VALID_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
      console.log(VALID_EMAIL);
      if (PASSWORD || VALID_EMAIL) {
        this.setState({ habilit: true });
      } else {
        this.setState({ habilit: false });
      }
    });
  }

  handleClick() {
    const { history, saveStateLogin } = this.props;
    const { email } = this.state;

    saveStateLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, habilit } = this.state;
    return (
      <div className="login-container">
        Login
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            id="email"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
          />
        </label>
        <div>
          <label htmlFor="pass">
            Password
            <input
              data-testid="password-input"
              type="text"
              id="pass"
              placeholder="password"
              value={ password }
              onChange={ this.handleChange }
              required
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={ !habilit }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  saveStateLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveStateLogin: (email) => dispatch(saveStateLoginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
