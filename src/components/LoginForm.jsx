import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const PASSWORD_PATTERN = /^\w{6,}$/;

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  disableButton({ email, password }) {
    return !(EMAIL_PATTERN.test(email) && PASSWORD_PATTERN.test(password));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login rounded shadow">
        <h1 className="text-success">Trybewallet</h1>
        <div className="d-flex flex-column">
          <EmailInput value={ email } onChange={ this.handleChange } />
          <PasswordInput value={ password } onChange={ this.handleChange } />

          <button
            type="button"
            className="btn btn-success mt-3"
            disabled={ this.disableButton(this.state) }
          >
            Entrar

          </button>

        </div>

      </div>
    );
  }
}
