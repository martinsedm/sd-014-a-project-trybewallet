import React from 'react';
import validator from 'validator';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    /*
    Se eu usace onChange={ this.handleChange } nos inputs, seria necessario o uso do bind, como eu usei callback no onclick entao não foi necessario o bind
    */
    // this.handleChange = this.handleChange.bind(this);

    this.validateEmailPassword = this.validateEmailPassword.bind(this);
  }

  validateEmailPassword() {
    const { email, password } = this.state;
    const MIN_CHARACTERES_PASSWORD = 5;
    const passwordValidate = password.length >= MIN_CHARACTERES_PASSWORD;
    const emailValidate = validator.isEmail(email); // usei uma biblioteca

    // Outra forma de validar sem a biblioteca que instalei
    // fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    //  const testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);

    if (emailValidate && passwordValidate) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value });

    this.validateEmailPassword();
  }

  render() {
    const { email, password, disabled } = this.state;
    // console.log(email);
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            name="email"
            data-testid="email-input"
            placeholder="E-mail"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            data-testid="password-input"
            placeholder="password"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
