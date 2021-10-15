import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.walletPage = this.walletPage.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  setPassword(event) {
    const { value } = event.target;
    this.setState({ password: value });
  }

  walletPage() {
    const { email, password } = this.state;
    const { history } = this.props;

    // configurar a atualizacao da getStore
    console.log(email, password);

    // ir para a nova Página
    console.log(history);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const MIN_LENGTH_PASSWORD = 6;
    return (
      <form>
        <label htmlFor="inputEmail">
          Email:
          <input
            type="email"
            id="inputEmail"
            data-testid="email-input"
            value={ email }
            onChange={ this.setEmail }
          />
        </label>
        <label htmlFor="inputPassword">
          Senha:
          <input
            type="password"
            id="inputPassword"
            data-testid="password-input"
            minLength={ MIN_LENGTH_PASSWORD }
            value={ password }
            onChange={ this.setPassword }
          />
        </label>
        <button
          type="button"
          disabled={ password.length < MIN_LENGTH_PASSWORD }
          onClick={ this.walletPage }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
