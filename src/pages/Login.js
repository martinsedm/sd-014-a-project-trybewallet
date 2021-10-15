import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input type="email" placeholder="email" data-testid="email-input" />
        <input type="password" placeholder="senha" data-testid="password-input" />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
