import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="login-email">
          <input
            type="email"
            name="email"
            id="login-email"
            data-testid="email-input"
            placeholder="Insira seu email aqui..."
          />
        </label>
        <label htmlFor="login-password">
          <input
            type="text"
            id="login-password"
            name="password"
            data-testid="password-input"
            placeholder="Insira sua senha"
          />
        </label>
        <label htmlFor="login-btn-submit">
          <input
            type="submit"
            id="login-btn-submit"
            value="Entrar"
          />
        </label>
      </form>
    );
  }
}

export default Login;
