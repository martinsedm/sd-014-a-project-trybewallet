import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              data-testid="email-input"
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              data-testid="password-input"
            />
          </label>

          <button type="button">
            Entrar
          </button>
        </form>
      </>
    );
  }
}

export default Login;
