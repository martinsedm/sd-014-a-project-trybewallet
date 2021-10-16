import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmailPassword = this.validateEmailPassword.bind(this);
  }

  validateEmailPassword() {
    const { password, email } = this.state;
    const MIN_CHARACTERS_PASSWORD = 5;

    const testPassword = password.length >= MIN_CHARACTERS_PASSWORD;
    const testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);

    if (testPassword && testEmail) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });

    this.validateEmailPassword();
  }

  render() {
    const { disabled, email, password } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
