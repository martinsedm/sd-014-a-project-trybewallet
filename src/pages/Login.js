import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { password, email } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail
            <input
              data-testid="email-input"
              placeholder="Digite seu email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              data-testid="password-input"
              placeholder="Digite sua senha"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
