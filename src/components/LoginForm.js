import React from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends React.Component {
  render() {
    const { email, password, handleLogin, handleInput, disabled } = this.props;
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            data-testid="email-input"
            value={ email }
            onChange={ handleInput }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="text"
            data-testid="password-input"
            value={ password }
            onChange={ handleInput }

          />
        </label>
        <button
          type="button"
          onClick={ handleLogin }
          disabled={ disabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
