import React from 'react';
import { Redirect } from 'react-router-dom';
import Buttons from '../Component/Buttons';

import Inputs from '../Component/Inputs';

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
        <Inputs
          type="email"
          name="email"
          value={ email }
          dataTestid="email-input"
          onChange={ this.handleOnChancge }
        />
        <Inputs
          type="password"
          name="senha"
          value={ senha }
          dataTestid="password-input"
          placeholder="Senha"
          onChange={ this.handleOnChancge }
          onKeyUp={ this.loginValidation }
        />
        <Buttons
          disabled={ disabled }
          onClick={ this.clickButton }
          msg="Entrar"
        />
        { btnClicado && <Redirect to="/carteira" />}
      </div>
    );
  }
}

export default Login;
