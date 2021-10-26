import React from 'react';
import {
  emailValidation,
  passwordValidation,
} from '../helper';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleDisabled(email, password) {
    if (emailValidation(email) && passwordValidation(password)) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Login:
            <input
              id="email"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            disabled={ this.handleDisabled(email, password) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
