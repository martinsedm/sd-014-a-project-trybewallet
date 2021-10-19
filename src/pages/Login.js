import React from 'react';
import { Link } from 'react-router-dom';

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
    const { handleChange } = this;

    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const validateEmail = () => {
      const reg = /\S+@\S+\.\S+/;
      return reg.test(email);
    };

    const MIN_CHARACTERS = 6;
    const validatePass = password.length >= MIN_CHARACTERS;

    return (
      <div>
        <label htmlFor="input-email">
          Email:
          <input
            id="input-email"
            name="email"
            type="email"
            value={ email }
            data-testid="email-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="input-password">
          Password:
          <input
            id="input-password"
            name="password"
            type="password"
            value={ password }
            data-testid="password-input"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !(validateEmail() && validatePass) }
        >
          <Link to="/carteira">Entrar</Link>
        </button>
      </div>
    );
  }
}

export default Login;
