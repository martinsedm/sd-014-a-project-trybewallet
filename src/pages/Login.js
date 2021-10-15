import React from 'react';
import './stylesPages.css';

class Login extends React.Component {
  render() {
    return (
      <form className="div-login">
        <label htmlFor="input-email">
          <input
            type="email"
            name="email"
            id="input-email"
            placeholder="user@email.com"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="input-password">
          <input
            type="password"
            name="password"
            id="input-password"
            placeholder="password123"
            data-testid="password-input"
          />
        </label>
        <button type="submit" id="botao-submit">Entrar</button>
      </form>

    );
  }
}

export default Login;
