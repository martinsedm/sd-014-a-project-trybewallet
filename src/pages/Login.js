import React, { Component } from 'react';

import Input from '../components/Input';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  emailValidation(email) {
    const i = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return i.test(String(email).toLowerCase());
  }

  render() {
    const { email, password } = this.state;
    const MIN = 6;
    return (
      <fieldset>
        <Input id="email" tag="Email" value={ email } func={ this.handleChange } />
        <Input id="password" tag="Senha" value={ password } func={ this.handleChange } />
        <button
          type="submit"
          disabled={ password.length < MIN || !this.emailValidation(email) }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
