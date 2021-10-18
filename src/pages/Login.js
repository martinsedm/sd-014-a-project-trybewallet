import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            id="email-input"
            data-testid="email-input"
            placeholder="andrea@trybe.com"
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            type="password"
            id="password-input"
            data-testid="password-input"
            placeholder="trybe123"
          />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
