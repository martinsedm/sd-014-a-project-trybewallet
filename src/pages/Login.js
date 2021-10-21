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

  handleChange({ target: { email, value } }) {
    this.setState({ [email]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            placeholder="Email"
            type="text"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            placeholder="Digite sua senha"
            value={ password }
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>

    );
  }
}

export default Login;
