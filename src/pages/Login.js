import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  isValidEmail = (email) => email.match(/^[\w.]+@[\w.]+\w+\.\w+$/);

  isValidLogin = () => {
    const PASSWORD_MIN_LENGTH = 6;
    const { email, password } = this.state;
    return password.length >= PASSWORD_MIN_LENGTH && this.isValidEmail(email);
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
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
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
