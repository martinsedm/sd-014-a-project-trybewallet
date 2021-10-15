import React from 'react';
// import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      button: true,
      checkEmail: false,
      checkPassword: false,
    };

    this.validateButton = this.validateButton.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Usando Regex (https://stackoverflow.com/a/9204568) para verificar formatação do email e salvar no estado a sua validação;
  validateEmail(email) {
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.setState({ checkEmail: true }, () => this.validateButton());
    } else { // caso alterado, ele mudará sua a validação para a inicial;
      this.setState({ checkEmail: false }, () => this.validateButton());
    }
  }

  // Verifica se a senha tem 6 ou mais caracteres para salvar no estado sua validação;
  validatePassword(password) {
    const minChar = 6;
    if (password.length >= minChar) {
      this.setState({ checkPassword: true }, () => this.validateButton());
    } else { // caso alterado, ele mudará sua a validação para a inicial;
      this.setState({ checkPassword: false }, () => this.validateButton());
    }
  }

  // Recebe as validações do Email e Senha para saber se deve ou não mudar o estado do botão;
  validateButton() {
    const { checkEmail, checkPassword } = this.state;
    return checkEmail && checkPassword
      ? this.setState({ button: false }) : this.setState({ button: true });
  }

  // Muda o estado de acordo com o que é colocado no input ao mesmo tempo que chama as funções de validação;
  handleChange({ target }) {
    const { id, value } = target;

    this.setState({ [id]: value });

    if (id === 'email') {
      this.validateEmail(value);
    }

    if (id === 'password') {
      this.validatePassword(value);
    }
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <fieldset>
        <legend>Login</legend>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            value={ email }
            id="email"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            value={ password }
            id="password"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ button }
          type="button"
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
