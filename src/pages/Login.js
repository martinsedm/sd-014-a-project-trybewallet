import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      validEmail: false,
      validPassword: false,
    };

    this.handleVerification = this.handleVerification.bind(this);
  }

  handleVerification({ target }) {
    if (target.name === 'email') {
      // src: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
      const regex = /\S+@\S+\.\S+/;
      const validEmail = regex.test(target.value);

      this.setState({
        validEmail,
      });
    } else {
      const CARACTERES_SENHA = 6;
      const validPassword = target.value.length >= CARACTERES_SENHA;

      this.setState({
        validPassword,
      });
    }
  }

  render() {
    const { validEmail, validPassword } = this.state;
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleVerification }
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleVerification }
            />
          </label>

          <button
            type="button"
            disabled={ !(validEmail && validPassword) }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

export default Login;
