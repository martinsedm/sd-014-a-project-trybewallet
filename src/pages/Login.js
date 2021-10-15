import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleChange({ target: { name, value } }) {
    return this.setState({ [name]: value });
  }

  handleClick() {
    const { email } = this.state;
    const { history, login } = this.props;
    login({ email });
    history.push('/carteira');
  }

  // Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateInput(email, password) {
    const MIN_LENGTH_PASSWORD = 6;
    const re = /\S+@\S+\.\S+/;
    return (re.test(email) && (password.length >= MIN_LENGTH_PASSWORD));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              type="text"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
              required
            />
          </label>
          <button
            type="button"
            disabled={ !this.validateInput(email, password) }
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
