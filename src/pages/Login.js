import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      isEmailValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // consulta no https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => {
        const { email } = this.state;
        const enableEmail = this.validateEmail(email);
        this.setState({ isEmailValid: enableEmail });
      });
  }

  render() {
    const { password, email, isEmailValid } = this.state;
    const minChar = 6;
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
          <br />
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
          <br />
          <Link
            to="/carteira"
          >
            <button
              type="submit"
              disabled={ !(password.length >= minChar && isEmailValid) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
