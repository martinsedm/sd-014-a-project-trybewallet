import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="Insira seu Email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Insira sua Senha"
            data-testid="password-input"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
