import React from 'react';
import { emailAuthentication, passwordAuthentication } from '../services/authentication';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAuth: false,
      passwordAuth: false,
    };
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth({ target: { value, name } }) {
    if (name === 'email') {
      const emailAuth = emailAuthentication(value);
      this.setState({ emailAuth });
    }
    if (name === 'password') {
      const passwordAuth = passwordAuthentication(value);
      this.setState({ passwordAuth });
    }
  }

  render() {
    const { emailAuth, passwordAuth } = this.state;
    const disabled = !(emailAuth && passwordAuth);
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              onChange={ this.handleAuth }
              placeholder="Digite seu e-mail"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              id="password"
              name="password"
              onChange={ this.handleAuth }
              placeholder="Digite sua senha"
            />
          </label>
          <button
            type="button"
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
