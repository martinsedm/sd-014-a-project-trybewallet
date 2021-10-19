import React, { Component } from 'react';
import { REGEX_EMAIL_VALIDATION, MIN_PASSWORD_LENGTH } from '../services/noMagicStuff';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '', 
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.loginValidation();
    });
  }

  loginValidation() {
    const { email, password } = this.state;
    let setDisabled = false;
    setDisabled = !(REGEX_EMAIL_VALIDATION.test(email) && password.length >= MIN_PASSWORD_LENGTH);
    this.setState({ disabled: setDisabled });
  }
  render() {
    const { email, password, disabled } = this.state;
    return (
      <main>
        <header>
          <h1>TrybeWallet by Anna Hamann</h1>
          <h3>
            Login
          </h3>
        </header>
        <form>
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            type="submit"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;