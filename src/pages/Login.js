import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
      send: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <Input
          name="email"
          value={ email }
          type="text"
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
          disabled={ disabled }
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
