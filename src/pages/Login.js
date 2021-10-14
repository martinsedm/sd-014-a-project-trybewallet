import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  enableButton() {
    const { senha } = this.state;
    const MIN_LENGTH = 6;
    if (senha.length < MIN_LENGTH) return true;
    if (!this.emailValidation()) return true;
    return false;
  }

  emailValidation() {
    const { email } = this.state;
    const emailCheck = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    // Validação de email retirada de:
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    return emailCheck.test(email);
  }

  handleClick() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, senha, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <input
          type="email"
          name="email"
          value={ email }
          placeholder="e-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="senha"
          value={ senha }
          placeholder="senha"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button disabled={ this.enableButton() } type="button" onClick={ this.handleClick }>Entrar</button>
      </div>
    );
  }
}
