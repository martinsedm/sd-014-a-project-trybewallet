import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { loginUser as login } from '../actions';

const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const PASSWORD_PATTERN = /^\w{6,}$/;

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(email) {
    const { redirect, loginUser } = this.props;
    loginUser(email);
    redirect();
  }

  disableButton({ email, password }) {
    return !(EMAIL_PATTERN.test(email) && PASSWORD_PATTERN.test(password));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login rounded shadow mt-5">
        <h1 className="text-success">Trybewallet</h1>
        <div className="d-flex flex-column">
          <EmailInput value={ email } onChange={ this.handleChange } />
          <PasswordInput value={ password } onChange={ this.handleChange } />

          <button
            type="button"
            className="btn btn-success mt-3"
            disabled={ this.disableButton(this.state) }
            onClick={ () => this.handleClick(email) }
          >
            Entrar
          </button>

        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email) => dispatch(login(email)),
});

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
