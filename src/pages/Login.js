import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    const { user, history } = this.props;
    user(email);
    history.push('/carteira');
  }

  render() {
    const CARACTER_MIN = 6;
    const { email, password } = this.state;
    const VALID_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          placeholder="Digite seu email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          placeholder="Digite a senha"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ password.length < CARACTER_MIN || email.search(VALID_EMAIL) !== 0 }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  user: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
