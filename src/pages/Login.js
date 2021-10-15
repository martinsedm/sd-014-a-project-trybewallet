import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
  }

  onSubmit() {

  }

  // Peguei o formato do email do link https://www.w3resource.com/javascript/form/email-validation.php
  emailValidation() {
    const { email } = this.state;
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const minPasswordLength = 6;
    const { password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ !this.emailValidation() || password.length < minPasswordLength }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
