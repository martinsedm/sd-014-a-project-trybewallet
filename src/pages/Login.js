import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setEmail } from '../actions';

import {
  emailValidation,
  passwordValidation,
} from '../helper';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleDisabled(email, password) {
    if (emailValidation(email) && passwordValidation(password)) {
      return false;
    }
    return true;
  }

  handleLogin() {
    const { login, history } = this.props;
    const { email } = this.state;
    login(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Login:
            <input
              id="email"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            disabled={ this.handleDisabled(email, password) }
            onClick={ this.handleLogin }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(setEmail(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
