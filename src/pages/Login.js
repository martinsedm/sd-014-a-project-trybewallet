import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Login</legend>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            id="email"
            name="email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            id="password"
            name="password"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
