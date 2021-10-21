import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { saveEmail as saveEmailAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.createInput = this.createInput.bind(this);
  }

  handleChange({ target: { name, value } }) {
    return this.setState({ [name]: value });
  }

  handleClick() {
    const { history, saveEmail } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira');
  }

  validateEmail(email) {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    const MIN_PASSWORD_LENGTH = 6;
    return password.length >= MIN_PASSWORD_LENGTH;
  }

  validateInput(email, password) {
    if (this.validatePassword(password) && this.validateEmail(email) === true) {
      return false;
    }
    return true;
  }

  createInput(type, testId, placeholder) {
    return (
      <label htmlFor={ type }>
        <input
          type={ type }
          name={ type }
          data-testid={ testId }
          onChange={ this.handleChange }
          placeholder={ placeholder }
        />
      </label>
    );
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        { this.createInput('email', 'email-input', 'E-mail') }
        { this.createInput('password', 'password-input', 'Senha') }
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ this.validateInput(email, password) }
        >
          Entrar
        </button>
      </form>
    );
  }
}
// https://stackoverflow.com/questions/49642561/how-to-pass-internal-state-to-global-state-using-redux/49642697

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  saveEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
