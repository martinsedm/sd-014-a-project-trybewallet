import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.createInput = this.createInput.bind(this);
  }

  handleChange({ target: { name, value } }) {
    return this.setState({ [name]: value });
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

  createInput(type, value, testId) {
    return (
      <label htmlFor={ type }>
        <input
          type={ type }
          id={ type }
          name={ type }
          value={ value }
          data-testid={ testId }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        { this.createInput('email', email, 'email-input')}
        { this.createInput('password', password, 'password-input')}
        <Link to="/carteira">
          <button
            type="button"
            // onClick={  }
            disabled={ this.validateInput(email, password) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}
