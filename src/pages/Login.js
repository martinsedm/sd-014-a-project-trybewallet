import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleChange({ target: { name, value } }) {
    return this.setState({ [name]: value });
  }

  // Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateInput(email, password) {
    const MIN_LENGTH_PASSWORD = 6;
    const re = /\S+@\S+\.\S+/;
    return (re.test(email) && (password.length >= MIN_LENGTH_PASSWORD));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>

          <form>
            <label htmlFor="email">
              Email:
              <input
                id="email"
                type="email"
                name="email"
                value={ email }
                onChange={ this.handleChange }
                data-testid="email-input"
                required
              />
            </label>
          </form>
          <form>
            <label htmlFor="password">
              Senha:
              <input
                id="password"
                type="text"
                name="password"
                value={ password }
                onChange={ this.handleChange }
                data-testid="password-input"
                required
              />
            </label>
          </form>
          <button
            type="button"
            disabled={ !this.validateInput(email, password) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
