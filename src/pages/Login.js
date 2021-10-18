import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Trybe Wallet</h2>
        <form>
          <input
            type="email"
            data-testid="email-input"
            placeholder="email"
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
