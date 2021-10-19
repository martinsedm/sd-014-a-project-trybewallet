import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { emailChange } from '../actions';
import { RGX_EMAIL, MIN_PASS_LEN } from '../services/noMagicStuff';

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
    setDisabled = !(RGX_EMAIL.test(email) && password.length >= MIN_PASS_LEN);
    this.setState({ disabled: setDisabled });
  }

  render() {
    const { email, password, disabled, login } = this.state;
    return (
      <main className="login-sec">
        <form className="div-login">
          <h2 className="my-3">TrybeWallet by Anna Hamann</h2>
          <div className="mb-3">
            <label htmlFor="email">
              Type in your best e-mail
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={ email }
                onChange={ this.handleChange }
                data-testid="email-input"
                placeholder="name@example.com"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              Choose a nice password
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={ password }
                onChange={ this.handleChange }
                data-testid="password-input"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={ disabled }
            onClick={ this.handleClick }
            className="btn btn-dark"
          >
            Entrar
          </button>
        </form>
        { login ? <Redirect to="/carteira" /> : '' }
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
