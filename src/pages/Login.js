import React from 'react';

import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  validateEmail(email) {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const MIN_PWD_LENGTH = 6;
    const { email, password } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <fieldset>
          <Input
            htmlFor="email"
            label="Email:"
            testid="email-input"
            type="email"
            onChange={ this.handleChange }
          />
          <Input
            htmlFor="password"
            label="Senha:"
            testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            disabled={ password.length < MIN_PWD_LENGTH || !this.validateEmail(email) }
          >
            Entrar
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
