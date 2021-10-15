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

  handleChange({ target: { name, value } }) {
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
  // Source: "https://stackoverflow.com/questions/43676695/email-validation-react-native-returning-the-result-as-invalid-for-all-the-e"

  render() {
    const { email, password, validData } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Faça seu login</legend>
          <label htmlFor="email">
            E-mail
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              placeholder="Digite seu e-mail"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              id="password"
              name="password"
              value={ password }
              placeholder="Digite sua senha"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
        </fieldset>
        <button
          type="button"
          disabled={ !validData }
          // onClick={ }
        >
          <Link to="/carteira">Entrar</Link>
        </button>
      </form>
    );
  }
}

export default Login;
