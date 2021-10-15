import React from 'react';
import logo from '../logo.svg';

import '../style/login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="ctn-login">
        <img className="login-logo" alt="Trybe Wallet Logo" src={ logo } />
        <h1>TrybeWallet React</h1>
        <input
          className="login-input"
          data-testid="email-input"
          name="email"
          type="email"
          placeholder="Informe seu email"
          // onChange={ this.handleChange }
        />
        <input
          className="login-input"
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Informe sua senha"
          // onChange={ this.handleChange }
        />
        <button
          className="login-button"
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
