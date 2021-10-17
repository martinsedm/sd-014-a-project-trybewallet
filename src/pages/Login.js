import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
  // https://stackoverflow.com/questions/5342375/regex-email-validation//
    const minPasswordLength = 6;
    const { email, password } = this.state;
    const emailSyntaxRegex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/i;
    const validateEmail = emailSyntaxRegex.test(email);

    return (
      <form>
        email:
        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        senha:
        <input
          name="password"
          type="number"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !(password.length >= minPasswordLength && validateEmail) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
