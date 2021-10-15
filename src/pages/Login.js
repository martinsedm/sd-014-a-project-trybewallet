import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };
    this.handleChance = this.handleChance.bind(this);
  }

  handleChance({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, senha } = this.state;
    return (
      <form>
        <input
          data-testid="email-input"
          onChange={ this.handleChance }
          value={ email }
          name="email"
        />
        <input
          data-testid="password-input"
          onChange={ this.handleChance }
          value={ senha }
          name="senha"
          type="password"
        />
        <button type="submit">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
