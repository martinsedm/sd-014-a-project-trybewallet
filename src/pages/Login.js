import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      send: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    this.verifyFilds();
  }

  verifyFilds() {
    const { email, password } = this.state;
    const NUMBER_MAX_PASSWORD = 5;
    const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (re.test(email) && password.length > NUMBER_MAX_PASSWORD) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Input
          name="email"
          value={ email }
          type="email"
          onChange={ this.handleChange }
        >
          Email
        </Input>
        <Input
          name="password"
          value={ password }
          type="password"
          onChange={ this.handleChange }
        >
          Senha
        </Input>
        <button
          type="button"
          disabled={ this.verifyFilds() }
          onClick={ (e) => {
            e.preventDefault();
          } }
        >
          Entrar
        </button>
      </div>
    );
  }
}
