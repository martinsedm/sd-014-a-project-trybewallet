import React from 'react';
import '../styles/login.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleLogin() {
    return null;
  }

  render() {
    const { email, password } = this.state;

    return (
      <form className="login-field">
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              onChange={ this.handleChange }
              type="email"
              value={ email }
              id="email"
              name="email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              onChange={ this.handleChange }
              type="password"
              id="password"
              name="password"
              value={ password }
            />
          </label>
        </fieldset>
        <button
          type="submit"
          onClick={ this.handleLogin }
        >
          {' '}
          Entrar
          {' '}

        </button>
      </form>
    );
  }
}
