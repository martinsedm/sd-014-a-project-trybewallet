import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      login: false,
      disableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });

    const form = document.getElementById('form-login');
    if (form.checkValidity()) {
      this.setState({
        disableButton: false,
      });
    }else{
      this.setState({
        disableButton: true,
      });
    }
  }

  handleClick() {
    const { email, password } = this.state;
    if (email === 'alguem@alguem.com' && password === '123456') {
      this.setState({
        login: true,
      });
    }
  }

  render() {
    const { email, password, login, disableButton } = this.state;
    if (login) {
      return (
        <Redirect to="/carteira" />
      );
    }
    return (
      <section>
        <h2>TrybeWallet</h2>
        <form name="login" id="form-login">
          <fieldset>
            <legend>Entre com Email e senha</legend>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                data-testid="email-input"
                value={ email }
                required
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                name="password"
                minLength="6"
                data-testid="password-input"
                value={ password }
                required
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              onClick={ this.handleClick }
              disabled={ disableButton }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Login;
