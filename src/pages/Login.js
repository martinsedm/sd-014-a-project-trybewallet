import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLoginEmail } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validateEmail(email, password) {
    /* Validação feita com ajuda de: https://ui.dev/validate-email-address-javascript/ */
    const MIN_CHAR = 6;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPassword = password.length >= MIN_CHAR;
    return regexEmail && validPassword;
  }

  handleClick() {
    const { email } = this.state;
    const { userLogin, history } = this.props;
    userLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            value={ password }
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ !this.validateEmail(email, password) }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(userLoginEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
