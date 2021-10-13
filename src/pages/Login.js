import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Função genérica para salvar o que é digitado no input dentro do estado
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const MAXLENGTH = 6;
    const validateEmail = /\S+@\S+\.\S+/.test(email);
    // https://backefront.com.br/validacao-email-javascript/
    return (
      <fieldset>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <button type="submit" disabled={ !validateEmail || password.length < MAXLENGTH }>Entrar</button>
      </fieldset>

    );
  }
}

export default Login;
