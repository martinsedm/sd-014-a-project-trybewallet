import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Login:
            <input
              id="email"
              type="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              data-testid="password-input"
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
