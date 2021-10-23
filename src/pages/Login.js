import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login:
        <Input id="email-input" label="Email:" />
        <Input id="password-input" label="Senha:" />
        <button type="button">Entrar</button>

      </div>);
  }
}

export default Login;
