import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailAndPassowordValidation.bind(this);
  }

  emailAndPassowordValidation() {
    const PASSWORD_LENGTH = 5;
    const { email, password } = this.state;
    // Regex utilizada foi retirada de https://stackoverflow.com/questions/53377994/email-validation-in-reactjs-is-not-working-properly
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (emailRegex.test(email) && password.length >= PASSWORD_LENGTH) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.emailAndPassowordValidation();
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <form>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </div>
          <br />
          <button
            type="submit"
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
