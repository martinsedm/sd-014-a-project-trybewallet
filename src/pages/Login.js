import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { emailAction } from '../actions';
import { verifyEmail, verifyPassword } from '../utils/verifyLoginInputs';

import '../css/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { dispatchEmail, history } = this.props;
    const buttonTrue = !(verifyEmail(email) && verifyPassword(password));
    return (
      <div className="login-box">
        <div className="login">
          <label htmlFor="email-login">
            <h5>E-mail</h5>
            <input
              name="email"
              type="text"
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="password-input">
            <h5>Senha</h5>
            <input
              name="password"
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              value={ password }
            />
          </label>
          <button
            type="button"
            disabled={ buttonTrue }
            onClick={ () => {
              dispatchEmail(email);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (state) => dispatch(emailAction(state)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
