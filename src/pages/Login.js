import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="email-input"
          />
        </label>
        <br />
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            testid="password-input"
          />
        </label>
        <br />
        <button
          data-testid="password-input"
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
