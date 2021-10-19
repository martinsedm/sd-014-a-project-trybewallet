import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

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
  }

  clickHandler() {
    this.setState({
      logged: true,
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
            onClick={ () => login({ email }) }
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

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(userLogin(email)),
});

// const mapStateToProps = (state) => ({
//   userReducer: state.userReducer,
// });

export default connect(null, mapDispatchToProps)(Login);
