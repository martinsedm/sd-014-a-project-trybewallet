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

  checkInputs() {

  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { handleChange } = this;
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            value={ email }
            type="email"
            name="email"
            onChange={ handleChange }
            required
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            value={ password }
            type="password"
            name="senha"
            onChange={ handleChange }
            required
          />
        </label>
        <button
          type="button"
          disabled={ 2 > 1 }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
