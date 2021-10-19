import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Senha"
          data-testid="password-input"
        />
        <button
          type="submit"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
