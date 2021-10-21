import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { salvarLogin } from '../actions';

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
    const { dispatchLogin, history } = this.props;
    const { email } = this.state;
    dispatchLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const CARACTERMIN = 6;
    const validaSenha = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; // ajuda de Matheus Souza e Dayane Barbosa
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ password.length < CARACTERMIN || email.search(validaSenha) !== 0 }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(salvarLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
