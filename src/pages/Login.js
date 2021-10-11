import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onClickBtn() {
    const { history } = this.props;
    history.push
  }

  validateEmail() {
    const { email } = this.state;
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    return (
      <>
        <input
          data-testid="email-input"
          onChange={ this.handleChange }
          type="text"
          name="email"
          value={ email }
        />
        <input
          data-testid="password-input"
          onChange={ this.handleChange }
          type="password"
          name="password"
          value={ password }
        />
        <button
          type="button"
          disabled={ !this.validateEmail()
            || password.length < MIN_PASSWORD_LENGTH }
          onClick={ this.onClickBtn }
        >
          Entrar
        </button>
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
