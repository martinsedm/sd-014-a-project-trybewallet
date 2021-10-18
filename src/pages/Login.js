import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  verifyLogin(email, password) {
    const validEmail = /\S+@+\S+\.\S/.test(email);
    const VALID_PASSWORD = 6;

    if (validEmail && password.length >= VALID_PASSWORD) {
      this.setState({
        redirect: true,
      });
      return true;
    }
  }

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !this.verifyLogin(email, password) }
          onClik={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
