import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogin as setLoginAction } from '../actions';

// comentário pra dar push
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    const { email } = this.state;
    const { setLogin } = this.props;
    setLogin(email);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const validaEmail = (email) => {
      const regexMail = /\S+@\S+\.\S+/;
      return regexMail.test(email);
    };
    const { email, password } = this.state;
    const minimunLetter = 6;
    const conditionButton = password.length >= minimunLetter && validaEmail(email);

    return (
      <div>
        Login
        <form>
          <input
            id="email"
            value={ email }
            type="text"
            name="email"
            onChange={ this.handleInput }
            data-testid="email-input"
          />
          <input
            name="password"
            value={ password }
            type="password"
            data-testid="password-input"
            onChange={ this.handleInput }
          />
          <Link to="/carteira">
            <button
              onClick={ this.handleButton }
              disabled={ !conditionButton }
              type="button"
              data-testid="login-submit-button"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>);
  }
}

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  setLogin: (email) => dispatch(setLoginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
