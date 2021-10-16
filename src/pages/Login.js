import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmailPassword = this.validateEmailPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validateEmailPassword() {
    const { password, email } = this.state;
    const MIN_CHARACTERS_PASSWORD = 5;

    const testPassword = password.length >= MIN_CHARACTERS_PASSWORD;
    const testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);

    if (testPassword && testEmail) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });

    this.validateEmailPassword();
  }

  handleClick() {
    const { email } = this.state;
    const { dispatchEmail, history } = this.props;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { disabled, email, password } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ disabled }
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
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(loginAction(email)),
});


export default connect(null, mapDispatchToProps)(Login);
