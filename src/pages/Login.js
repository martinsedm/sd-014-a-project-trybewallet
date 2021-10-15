import React from 'react';

import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <fieldset>
          <Input htmlFor="email-input" label="Email:" type="email" />
          <Input htmlFor="password-input" label="Senha:" type="text" />
          <input type="submit" value="Entrar" />
        </fieldset>
      </form>
    );
  }
}

export default Login;
