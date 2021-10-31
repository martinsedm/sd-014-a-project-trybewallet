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
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;

    // Referêcia: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const validaEmailRegex = /\S+@\S+\.\S+/;

    const caracMinimoSenha = 6;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="password">
          senha:
          <input
            id="password"
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            required
          />
        </label>
        <button
          type="button"
          disabled={ !validaEmailRegex.test(email) || password.length < caracMinimoSenha }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
