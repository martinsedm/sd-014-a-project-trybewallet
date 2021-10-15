import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="username">
          Login:
          <input data-testid="email-input" type="text" id="username" name="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input data-testid="password-input" type="text" id="password" name="password" />
        </label>
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
