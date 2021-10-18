import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const validateEmail = 'alguem@email.com';

    return (
      <div>
        <h2>Trybe Wallet</h2>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="email"
            value={ email }
            onChange={ this.handleOnChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleOnChange }
          />
          <button
            type="button"
            disabled={ password.length < passwordLength
               || email !== validateEmail }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
