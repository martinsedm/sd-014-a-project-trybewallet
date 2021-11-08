import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginInfo as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputCheck = this.inputCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    return this.setState({ [name]: value });
  }

  inputCheck(email, password) {
    const MIN_PASSWORD_SIZE = 6;
    // Fonte: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const emailCheck = /\S+@\S+\.\S+/;
    return (emailCheck.test(email) && (password.length >= MIN_PASSWORD_SIZE));
  }

  handleClick() {
    const { email } = this.state;
    const { history, login } = this.props;
    login({ email });
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
            name="email"
            data-testid="email-input"
            required
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            value={ password }
            onChange={ this.handleChange }
            name="password"
            data-testid="password-input"
            required
          />
        </label>
        <button
          type="button"
          disabled={ !this.inputCheck(email, password) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
