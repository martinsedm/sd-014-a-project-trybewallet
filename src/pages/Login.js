import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { emailChange } from '../actions';
import { REGEX_EMAIL_VALIDATION, MIN_PASSWORD_LENGTH } from '../services/noMagicStuff';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '', 
      disabled: true,
      login: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { handleEmail } = this.props;
    const { email } = this.state;
    this.setState({ login: true });
    handleEmail(email);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.loginValidation();
    });
  }

  loginValidation() {
    const { email, password } = this.state;
    let setDisabled = false;
    setDisabled = !(REGEX_EMAIL_VALIDATION.test(email) && password.length >= MIN_PASSWORD_LENGTH);
    this.setState({ disabled: setDisabled });
  }
  render() {
    const { email, password, disabled, login } = this.state;
    return (
      <main>
        <header>
          <h1>TrybeWallet by Anna Hamann</h1>
          <h3>
            Login
          </h3>
        </header>
        <form>
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            type="submit"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
        { login ? <Redirect to="/carteira" /> : ''} 
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleEmail: (payload) => dispatch(emailChange(payload)),
});

Login.propTypes = {
  handleEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);