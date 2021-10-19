import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          data-testid="email-input"
          placeholder="Digite seu email"
        />
        <input
          data-testid="password-input"
          placeholder="Digite sua senha"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
