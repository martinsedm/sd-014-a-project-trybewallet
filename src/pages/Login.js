import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  enableButton() {
    const { password } = this.state;
    const MIN_LENGTH = 6;
    if (password.length < MIN_LENGTH) return true;
    if (!this.emailValidation()) return true;
    return false;
  }

  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  emailValidation() {
    const { email } = this.state;
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailValidation.test(email);
  }

  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ this.enableButton() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
