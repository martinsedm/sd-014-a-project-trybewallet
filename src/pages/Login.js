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
    this.validEmail = this.validEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  validEmail() {
    const PASSWORD_LENGTH = 6;
    const { email, password } = this.state;
    const valid = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(valid) && password.length >= PASSWORD_LENGTH) return false;
    return true;
  }

  handleClick() {
    const { email } = this.state;
    const { userLogin } = this.props;
    userLogin(email);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <p>Login</p>
        <form id="form">
          <input
            name="email"
            type="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            disabled={ this.validEmail() }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default Login;
