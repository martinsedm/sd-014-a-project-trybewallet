// Informações sobre a Página de Login do Usuario.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inforUsuarioAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { inforUsuario, history } = this.props;
    inforUsuario(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;

    // Referêcia: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const validaEmailRegex = /\S+@\S+\.\S+/;

    const caracMinimoSenha = 6;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="login-password">
          senha:
          <input
            type="password"
            name="password"
            id="login-password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ !validaEmailRegex.test(email) || password.length < caracMinimoSenha }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inforUsuario: (email) => dispatch(inforUsuarioAction(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  inforUsuario: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
