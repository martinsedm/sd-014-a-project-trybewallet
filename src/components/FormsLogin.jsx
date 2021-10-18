import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formValidation from '../service/formValidation';
import Input from './Input';

export class FormsLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        isValid: false,
        value: '',
      },
      password: {
        isValid: false,
        value: '',
      },
    };
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
    this.checkAllFormIsValid = this.checkAllFormIsValid.bind(this);
  }

  checkAllFormIsValid() {
    const { state } = this;
    const listState = Object.keys(state);
    const result = listState.every((form) => state[form].isValid);
    return result;
  }

  handleChangeCheck({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: {
        isValid: formValidation(name, value),
        value,
      },
    });
  }

  render() {
    const { email, password } = this.state;
    const { setEmail } = this.props;
    this.checkAllFormIsValid();
    return (
      <form>
        <Input
          type="text"
          onChange={ this.handleChangeCheck }
          value={ email.value }
          id="email"
          name="email"
          TextLabel="Email: "
          testId="email-input"
        />
        <Input
          type="password"
          id="password"
          onChange={ this.handleChangeCheck }
          value={ password.value }
          name="password"
          TextLabel="Password: "
          testId="password-input"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !this.checkAllFormIsValid() }
            onClick={ () => setEmail(email.value) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

FormsLogin.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default FormsLogin;
