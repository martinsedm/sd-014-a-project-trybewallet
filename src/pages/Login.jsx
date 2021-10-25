import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

const six = 6;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logged: false,
    };
    this.eventHandler = this.eventHandler.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
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
    const { password, email, logged } = this.state;
    const { login } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="loginArea">
            Email:
            <input
              type="email"
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
              type="password"
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
            onClick={ () => {
              login({ email });
              this.setState({ email, logged: true });
            } }
            type="button"
          >
            Entrar
          </button>
          { logged && <Redirect to="/carteira" /> }
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    login: (data) => dispatch(loginAction(data)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
