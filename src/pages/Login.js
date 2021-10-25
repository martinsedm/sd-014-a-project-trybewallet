import React from 'react';

// comentário pra dar push
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const validaEmail = (email) => {
      const regexMail = /\S+@\S+\.\S+/;
      return regexMail.test(email);
    };
    const { email, password } = this.state;
    const minimunLetter = 6;
    const conditionButton = password.length >= minimunLetter && validaEmail(email);

    return (
      <div>
        Login
        <form>
          <input
            id="email"
            value={ email }
            type="text"
            name="email"
            onChange={ this.handleInput }
            data-testid="email-input"
          />
          <input
            name="password"
            value={ password }
            type="password"
            data-testid="password-input"
            onChange={ this.handleInput }
          />

          <button
            onClick={ this.handleButton }
            disabled={ !conditionButton }
            type="button"
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </form>
      </div>);
  }
}

export default Login;
