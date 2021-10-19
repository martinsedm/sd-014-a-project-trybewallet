import React from 'react';

const MIN_PASSWORD_LENGTH = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verifiedEmail: false,
      verifiedPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (name === 'email' && regex.test(value)) {
      this.setState({ verifiedEmail: true });
    }
    if (name === 'password' && value.length >= MIN_PASSWORD_LENGTH) {
      this.setState({ verifiedPassword: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { verifiedEmail, verifiedPassword } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            id="email-input"
            name="email"
            data-testid="email-input"
            placeholder="andrea@trybe.com"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            type="password"
            id="password-input"
            name="password"
            data-testid="password-input"
            placeholder="trybe123"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={
            !(verifiedEmail && verifiedPassword)
          }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
