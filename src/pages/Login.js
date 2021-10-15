import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      disabled: true,
      btnClicado: false,
    };
    this.handleOnChancge = this.handleOnChancge.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  handleOnChancge({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.cheked : target.value;
    this.setState({
      [name]: value,
    });
  }

  loginValidation() {
    const { senha } = this.state;
    const SENHA_MINIMA = 6;

    if (senha.length >= SENHA_MINIMA) {
      console.log('aqui');
      this.setState({
        disabled: false,
      });
    }
  }

  clickButton() {
    this.setState({
      btnClicado: true,
    });
  }

  render() {
    const { email, senha, disabled, btnClicado } = this.state;
    return (
      <div>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.handleOnChancge }
          />
        </label>
        <label htmlFor="senha">
          <input
            type="password"
            minLength="6"
            required
            id="senha"
            name="senha"
            value={ senha }
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.handleOnChancge }
            onKeyUp={ this.loginValidation }
          />
        </label>
        <button
          type="submit"
          disabled={ disabled }
          onClick={ this.clickButton }
        >
          Entrar
        </button>
        { btnClicado && <Redirect to="/Wallet" />}
      </div>
    );
  }
}

export default Login;
