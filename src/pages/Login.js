import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStateLogin as saveStateLoginAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      habilit: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const CARACTER_MIN = 6;
      const PASSWORD = password.length >= CARACTER_MIN;
      const VALID_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);

      if (PASSWORD && VALID_EMAIL) {
        this.setState({ habilit: true });
      } else {
        this.setState({ habilit: false });
      }
    });
  }

  render() {
    const { email, password, habilit } = this.state;
    const { saveStateLogin } = this.props;
    return (
      <div className="login">
        Login
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            id="email"
            type="text"
            name="email"
            value={ email }
            placeholder="Email"
          />
        </label>
        <div>
          <label htmlFor="pass">
            Password
            <input
              data-testid="password-input"
              type="password"
              id="pass"
              placeholder="password"
              value={ password }
              onChange={ this.handleChange }
              required
            />
          </label>
        </div>
        <button
          type="submit"
          desabilit={ !habilit }
          onClick={ () => saveStateLogin({ email }) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  saveStateLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveStateLogin: (email) => dispatch(saveStateLoginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
