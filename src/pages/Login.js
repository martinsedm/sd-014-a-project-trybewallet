import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <form>
          <label htmlFor="user-email">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              id="user-email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="user-password">
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="user-password"
              placeholder="Senha"
            />
          </label>
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
