import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailSenha } from '../actions';

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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatchSalvarEmail, history } = this.props;
    const { email } = this.state;
    dispatchSalvarEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const CARACTERMIN = 6;
    const validaSenha = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; // ajuda de Matheus Souza e Dayane Barbosa
    return (
      <form>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="passwor-input">
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          Type="button"
          onClick={ this.handleClick }
          disabled={ password.length < CARACTERMIN || email.search(validaSenha) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchEmailSenha: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmailSenha: (email) => dispatch(emailSenha(email)),
});

export default connect(null, mapDispatchToProps)(Login);
