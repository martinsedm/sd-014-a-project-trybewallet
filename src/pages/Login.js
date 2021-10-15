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

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { email, password } = this.state;
    const EMAIL_REGEX = /.+@.+\..+/;
    const MIN_PASSWORD_LENGTH = '6';
    return (
      <form>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <br />
        <input
          data-testid="password-input"
          type="text"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <br />
        <button
          type="submit"
          disabled={ !EMAIL_REGEX.test(email) || password.length < MIN_PASSWORD_LENGTH }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
