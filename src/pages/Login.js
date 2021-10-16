import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      validData: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    },

    () => {
      this.enableButton();
    });
  }

  enableButton() {
    const { email, password } = this.state;
    const MINIMUM_CHARACTERS = 6;
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);
    const validPassword = password.length >= MINIMUM_CHARACTERS;
    if (validEmail && validPassword) {
      this.setState({
        validData: true,
      });
    }
  }

  // "https://stackoverflow.com/questions/43676695/email-validation-react-native-returning-the-result-as-invalid-for-all-the-e"

  render() {
    const { email, password, validData } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              name="email"
              id="email"
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              name="password"
              id="password"
              value={ password }
            />
          </label>
          <button
            type="button"
            disabled={ !validData }
          >
            <Link to="/carteira">Entrar</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
