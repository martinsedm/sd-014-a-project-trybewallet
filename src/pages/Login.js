import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

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
    this.handleButton = this.handleButton.bind(this);
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

  // Guarda o email na store ao mesmo tempo que muda de página;
  handleButton() {
    const { history, storeEmail } = this.props;
    const { email } = this.state;
    storeEmail(email);
    history.push('/carteira');
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
          onClick={ this.handleButton }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

// Manda a action de salvar o email para a store;
const mapDispatchToProps = (dispatch) => ({
  storeEmail: (payload) => dispatch(getEmail(payload)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
