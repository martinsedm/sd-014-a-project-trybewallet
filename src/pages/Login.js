import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  validateEmail(email) {
    const structure = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return structure.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    const MINIMUM = 6;
    return password.length >= MINIMUM;
  }

  handleInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <main>
        <h3>Login</h3>
        <input
          type="text"
          name="email"
          value={ email }
          id="login"
          data-testid="email-input"
          onChange={ this.handleInput }
        />
        <input
          value={ password }
          type="text"
          name="password"
          id="password"
          data-testid="password-input"
          onChange={ this.handleInput }
        />
        <div>
          <Link to="/carteira">
            <button
              disabled={ !this.validateEmail(email) || !this.validatePassword(password) }
              type="button"
            >
              Entrar

            </button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Login;
