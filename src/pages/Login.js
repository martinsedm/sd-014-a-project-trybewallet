import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            data-testid="email-input"
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            data-testid="password-input"
            placeholder="password"
          />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
