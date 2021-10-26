import React from 'react';
// import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, senha } = this.state;
    return (
      <form>
        <input
          type="email"
          value={ email }
          name="email"
          data-testid="email-input"
          placeholder="E-mail"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          value={ senha }
          name="senha"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>);
  }
}

export default Login;
