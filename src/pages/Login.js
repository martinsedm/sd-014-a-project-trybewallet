import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };
    this.handleChance = this.handleChance.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  // atualiza estado local
  handleChance({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonClick() {
    console.log('login');
  }

  render() {
    const { email, senha } = this.state;
    return (
      <form onSubmit={ this.buttonClick }>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            onChange={ this.handleChance }
            value={ email }
            name="email"
          />
          { !email.match(/^\S+@\S+$/i)
            ? ' -e-mail inválido- ' : ' -ok- ' }
        </label>
        <label htmlFor="senha">
          <input
            data-testid="password-input"
            onChange={ this.handleChance }
            value={ senha }
            name="senha"
            type="password"
            minLength="6"
          />
        </label>
        <button type="submit">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
