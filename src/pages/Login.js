import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MIN_CHARACTHERS = 6;
    return (
      <form>
        <label htmlFor="login-email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            id="login-email"
            onChange={ this.handleChange }
            value={ email }
            placeholder="Insira seu email aqui..."
            required
          />
        </label>
        <label htmlFor="login-password">
          <input
            type="text"
            data-testid="password-input"
            id="login-password"
            name="password"
            onChange={ this.handleChange }
            value={ password }
            placeholder="Insira sua senha"
            required
          />
        </label>
        <label htmlFor="login-btn-submit">
          <input
            type="submit"
            id="login-btn-submit"
            value="Entrar"
            // REFERENCIA DE VALIDAÇÃO REGEX = https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
            disabled={ !EMAIL_REGEX.test(email) || password.length < MIN_CHARACTHERS }
          />
        </label>
      </form>
    );
  }
}

export default Login;
