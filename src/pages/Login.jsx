import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputCheck = this.inputCheck.bind(this);
  }

  handleChange({ target: { name, value } }) {
    return this.setState({ [name]: value });
  }

  inputCheck(email, password) {
    const MIN_PASSWORD_SIZE = 6;
    // Fonte: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const emailCheck = /\S+@\S+\.\S+/;
    return (emailCheck.test(email) && (password.length >= MIN_PASSWORD_SIZE));
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
            name="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            value={ password }
            onChange={ this.handleChange }
            name="password"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ !this.inputCheck(email, password) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
