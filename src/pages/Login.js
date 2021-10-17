import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        email:
        <input name="email" type="text" data-testid="email-input" />
        senha:
        <input name="password" type="number" data-testid="password-input" />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
