import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateAcess = this.validateAcess.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Realizei essa função de validação de email consultando https://ui.dev/validate-email-address-javascript/
  validateAcess(email, password) {
    const minCharacter = 6;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= minCharacter;
    return emailValid && passwordValid;
  }

  render() {
    const { email, password } = this.state;

    return (
      <form>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
          placeholder="Insira o seu email"
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          data-testid="password-input"
          placeholder="Insira a sua senha"
        />
        <button
          type="submit"
          disabled={ !this.validateAcess(email, password) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
