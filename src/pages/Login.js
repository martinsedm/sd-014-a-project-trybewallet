import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <div>Login</div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            placeholder="example@email.com"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="******"
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
