import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validateEmail: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    }, () => {
      const { email } = this.state;
      const enableEmail = this.validateEmail(email);
      this.setState({ validateEmail: enableEmail });
    });
  }

  render() {
    const { email, password, validateEmail } = this.state;
    const MIN_PASSWORD_CHARACTERS = 6;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <Link
          to="/carteira"
        >
          <button
            data-testid="password-input"
            type="button"
            disabled={ !(password.length >= MIN_PASSWORD_CHARACTERS && validateEmail) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
