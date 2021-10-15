import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
