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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, password } = this.state;
    const minPasswordLength = 6;

    return (
      <div>
        <input
          type="email"
          value={ email }
          name="email"
          data-testid="email-input"
          placeholder="Digite seu email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          value={ password }
          name="password"
          data-testid="password-input"
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={
            (!email.includes('@' && '.com') || password.length < minPasswordLength)
          }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
