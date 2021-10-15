import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.walletPage = this.walletPage.bind(this);

    this.state = {
      email: '',
      password: '',
      emailCorrect: false,
    };
  }

  setEmail(event) {
    const { value } = event.target;
    this.setState({
      email: value,
      emailCorrect: this.validateEmail(value),
    });
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

    history.push('/carteira');
  }

  // função retirada de: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const { email, password, emailCorrect } = this.state;
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
          disabled={ password.length < MIN_LENGTH_PASSWORD || !emailCorrect }
          onClick={ this.walletPage }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf.isRequired,
};

export default Login;
