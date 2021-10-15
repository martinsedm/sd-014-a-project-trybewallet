import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <form>
          <input
            placeholder="Email"
            data-testid="email-input"
            type="email"
          />
          <br />
          <input
            placeholder="Senha"
            data-testid="password-input"
            type="password"
          />
          <br />
          <button type="button">Entrar</button>

        </form>
      </div>
    );
  }
}

export default Login;
