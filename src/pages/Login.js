import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.ValidandoLogin = this.ValidandoLogin.bind(this);
  }

  handleInput({ target }) {
    const { type, value } = target;
    this.setState({
      [type]: value,
    });
  }

  ValidandoLogin() {
    const { password, email } = this.state;
    const PASSWORD_VALIDO = 6;
    const EMAIL_VALIDO = email.match(/\S+@\S+\.\S+/);
    return password.length >= PASSWORD_VALIDO && EMAIL_VALIDO;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form action="">
          <h1>Login: </h1>
          <input
            type="email"
            data-testid="email-input"
            onChange={ this.handleInput }
            value={ email }
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ this.handleInput }
            value={ password }
          />
          <input
            type="button"
            value="Entrar"
            disabled={ !this.ValidandoLogin() }
          />
        </form>
      </div>
    );
  }
}

export default Login;
