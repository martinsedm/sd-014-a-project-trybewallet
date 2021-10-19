import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveUser from '../actions';

const PASSWORD_MIN = 6;
const EMAIL_REGEX = /\S+@\S+\.\S+/;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.verifyLoginData = this.verifyLoginData.bind(this);
  }

  // { SITE UTILIZADO COMO REFERENCIA PARA A CONSTRUÇÃO DO EMAIL-REGEX } = https://www.kindacode.com/article/live-email-validation-in-react-with-regex/

  validateEmail(inputText) {
    if (EMAIL_REGEX.test(inputText)) {
      return true;
    }
  }

  handleClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  loginButton() {
    const { history, saveEmail } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira');
  }

  verifyLoginData(email, password = '') {
    if (password.length >= PASSWORD_MIN
    && this.validateEmail(email)) { return false; } return true;
  }

  render() {
    const { handleClick, loginButton, verifyLoginData } = this;
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <div>
            <input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="email"
              value={ email }
              onChange={ handleClick }
            />
          </div>
          <div>
            <input
              data-testid="password-input"
              type="password"
              name="password"
              placeholder="password"
              value={ password }
              onChange={ handleClick }
            />
          </div>
          <button
            type="button"
            disabled={ verifyLoginData(email, password) }
            onClick={ () => loginButton() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
