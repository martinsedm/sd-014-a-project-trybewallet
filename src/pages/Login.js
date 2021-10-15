import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            data-testid="password-input"
          />
        </label>
        <Link to="/carteira">
          <button type="button">Entrar</button>
        </Link>
      </form>
    );
  }
}

export default Login;
