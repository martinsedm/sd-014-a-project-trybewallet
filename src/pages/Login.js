import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail as saveEmailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState(
      { [name]: value },
    );
  }

  // validate email reference: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail() {
    const { email } = this.state;
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidation.test(email);
  }

  handleClick() {
    const { email } = this.state;
    const { saveEmail, history } = this.props;
    saveEmail({ email });
    history.push('./carteira');
  }

  render() {
    const { email, password } = this.state;
    const MIN_CHARACTERS_PASSWORD = 6;
    const passwordLength = password.length >= MIN_CHARACTERS_PASSWORD;
    return (
      <form>
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            placeholder="digite seu e-mail"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            placeholder="digite sua senha"
            minLength="6"
          />
        </label>
        <button
          type="button"
          disabled={ !passwordLength && !(this.validateEmail()) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(saveEmailAction(payload)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
