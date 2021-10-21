import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStateLogin } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  // handleClick(event) {
  //   event.preventDefault();
  //   const { history, saveStateEmail } = this.props;
  //   const { email } = this.state;

  //   saveStateEmail(email);
  //   history.push('/carteira');
  // }

  loginValid() {
    // const VALID_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);

    const PASSWORD_MIN = 6;
    const { email, password } = this.state;
    return password.length >= PASSWORD_MIN
          && /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
  }

  loginSubmit(event) {
    event.preventDefault();
    const { history, saveStateEmail } = this.props;
    const { email } = this.state;

    saveStateEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form
        onSubmit={ (event) => this.loginSubmit(event, { email, password }) }
      >
        <h1>TrybeWallet</h1>
        <div className="login-container">
          <label htmlFor="email">
            Digite seu Email:
            {' '}
            <input
              data-testid="email-input"
              id="email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Email"
            />
          </label>
          <div>
            <label htmlFor="password">
              Digite sua senha:
              {' '}
              <input
                data-testid="password-input"
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={ password }
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <button
            type="button"
            value="Entrar"
            disabled={ !this.loginValid() }
            onClick={ this.loginSubmit }
          >
            Entrar
            {' '}
          </button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  saveStateEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveStateEmail: (email) => dispatch(saveStateLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
