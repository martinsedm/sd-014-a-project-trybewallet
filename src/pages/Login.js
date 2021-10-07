import React from 'react';
import { emailVerification, passwordVerification } from '../services/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailCondition: false,
      passwordCondition: false,
    };
    this.handleCondition = this.handleCondition.bind(this);
  }

  handleCondition({ target: { value, name } }) {
    if (name === 'email') {
      const emailCondition = emailVerification(value);
      this.setState({ emailCondition });
    } else if (name === 'password') {
      const passwordCondition = passwordVerification(value);
      this.setState({ passwordCondition });
    }
  }

  render() {
    const { emailCondition, passwordCondition } = this.state;
    const buttonDisabled = !(emailCondition && passwordCondition);
    return (
      <main>
        <section>
          <h1>Login</h1>
          <form>
            <label htmlFor="email">
              Email:
              <input
                data-testid="email-input"
                type="email"
                name="email"
                onChange={ this.handleCondition }
                id="email"
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                data-testid="password-input"
                type="password"
                name="password"
                onChange={ this.handleCondition }
                id="password"
              />
            </label>
            <button
              type="button"
              disabled={ buttonDisabled }
            >
              Entrar
            </button>
          </form>
        </section>
      </main>
    );
  }
}

export default Login;
