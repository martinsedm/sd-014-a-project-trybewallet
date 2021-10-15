import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
          />
        </div>
        <div>
          <button type="button">Entrar</button>
        </div>
      </div>
    );
  }
}

export default Login;
