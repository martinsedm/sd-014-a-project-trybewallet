import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="input-email">
          Email:
          <input
            data-testid="email-input"
            type="text"
            name="email"
            id="input-email"
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="senha"
            id="input-password"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
