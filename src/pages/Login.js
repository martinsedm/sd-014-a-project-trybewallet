import React from 'react';
import { verifyEmail, verifyPassword } from '../utils/verifyLoginInputs';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const buttonTrue = !(verifyEmail(email) && verifyPassword(password));
    return (
      <div>
        <input
          name="email"
          type="text"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          name="password"
          type="text"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          disabled={ buttonTrue }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
