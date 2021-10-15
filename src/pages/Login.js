import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <label htmlFor="login">
          <input
            id="login"
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            placeholder="Digite seu email"
            required
          />
          <input
            id="login"
            data-testid="password-input"
            type="text"
            onChange={ this.handleChange }
            value={ password }
            name="password"
            placeholder="Digite sua senha"
            required
          />
          <button
            type="button"
            disabled
          >
            Entrar
          </button>
        </label>
      </fieldset>
    );
  }
}

export default Login;
