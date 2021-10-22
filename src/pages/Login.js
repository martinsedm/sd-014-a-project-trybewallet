import React, { Component } from 'react';

import Input from '../components/Input';

class Login extends Component {
  render() {
    return (
      <fieldset>
        <Input id="email" label="Email" />
        <Input id="password" label="Senha" />
        <button type="submit">Entrar</button>
      </fieldset>
    );
  }
}

export default Login;
