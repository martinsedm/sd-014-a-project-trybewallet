import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  submitLogin(event, user) {
    event.preventDefault();
    const { setLogUser, history } = this.props;
    setLogUser(user);
    history.push('/carteira');
  }

  isValidEmail(email) { return email.match(/^[\w.]+@[\w.]+\w+\.\w+$/); }

  isValidLogin() {
    const PASSWORD_MIN_LENGTH = 6;
    const { email, password } = this.state;
    return password.length >= PASSWORD_MIN_LENGTH && this.isValidEmail(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <h1>Trybe Wallet</h1>
        <form
          onSubmit={ (event) => this.submitLogin(event, { email, password }) }
        >
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
          <input
            type="submit"
            value="Entrar"
            disabled={ !this.isValidLogin() }
          />
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogUser: (user) => dispatch(logUser(user)),
});

Login.propTypes = {
  setLogUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
