import React, { Component } from 'react';
import { Redirect } from 'react-router';

const six = 6;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: false,
    };
    this.eventHandler = this.eventHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  eventHandler({ target }) {
    const { value, id } = target;
    if (id === 'email') {
      this.setState({
        email: value,
      });
    } else {
      this.setState({
        password: value,
      });
    }
    console.log(target);
  }

  clickHandler() {
    this.setState({
      login: true,
    });
  }

  verifyLogin() {
    const { email, password } = this.state;

    const verifyEmail = (mail) => {
      const regex = /\S+@\S+\.\S+/;
      return regex.test(mail);
    };

    const verifyPassword = (pwd) => pwd.length >= six;

    return !(verifyPassword(password) && verifyEmail(email));
  }

  render() {
    const { password, email, login } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="loginArea">
            Email:
            <input
              type="textarea"
              data-testid="email-input"
              onChange={ this.eventHandler }
              id="email"
              value={ email }
              placeholder="Email"

            />
          </label>

          <label htmlFor="passwordArea">
            Password:
            <input
              type="textarea"
              data-testid="password-input"
              onChange={ this.eventHandler }
              id="password"
              value={ password }
              placeholder="Password"
            />
          </label>

          <button
            data-testid="login-submit-button"
            disabled={ this.verifyLogin() }
            onClick={ this.clickHandler }
            type="button"
          >
            Entrar
          </button>
          { login && <Redirect to="/carteira" /> }
        </form>
      </section>
    );
  }
}

export default Login;
