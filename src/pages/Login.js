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
    this.setState({ [target.name]: target.value });
  }

  isValidEmail(email) { return email.match(/.+@.+\..+/); }

  isValidLogin() {
    const MIN_CARACTERS_PASSWORD = 6;
    const { email, password } = this.state;
    return password.length >= MIN_CARACTERS_PASSWORD && this.isValidEmail(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <input
            type="submit"
            value="Entrar"
            disabled={ !this.isValidLogin() }
          />
        </form>
      </section>
    );
  }
}

export default Login;
