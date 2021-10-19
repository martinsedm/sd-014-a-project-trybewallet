import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChverifyInputValuesange = this.verifyInputValues.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.verifyInputValues();
  }

  verifyInputValues() {
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;

    if (validEmail.test(email) && password.length >= MIN_PASSWORD_LENGTH) return false;

    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ this.verifyInputValues() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
