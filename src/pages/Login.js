import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      redirect: false,
    };
    this.handleChance = this.handleChance.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  // atualiza estado local
  handleChance({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    const { email, senha } = this.state;
    const caracteres = 5;
    if (email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
      && senha.length >= caracteres) {
      document.getElementById('submit').disabled = false;
    }
  }

  buttonClick() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, senha, redirect } = this.state;
    if (redirect === true) {
      return <Redirect to="/Wallet" />;
    }
    return (
      <form htmlFor="form" onSubmit={ this.buttonClick }>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            onChange={ this.handleChance }
            value={ email }
            name="email"
          />
        </label>
        <label htmlFor="senha">
          <input
            data-testid="password-input"
            onChange={ this.handleChance }
            value={ senha }
            name="senha"
            type="password"
          />
        </label>
        <button
          id="submit"
          disabled
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
