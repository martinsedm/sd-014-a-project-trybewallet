import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>TrybeWallet by Anna Hamann</h1>
          <h3>
            Login
          </h3>
        </header>
        <form>
          <input
            type="text"
            name="email"
            id="email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            id="password"
            data-testid="password-input"
          />
          <button
            type="submit"
            disabled
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
