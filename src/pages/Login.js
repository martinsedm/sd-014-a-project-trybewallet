import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionRegisterUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { history, registerUser } = this.props;
    registerUser(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MIN_CHARACTHERS = 6;
    return (
      <form>
        <label htmlFor="login-email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            id="login-email"
            onChange={ this.handleChange }
            value={ email }
            placeholder="Insira seu email aqui..."
            required
          />
        </label>
        <label htmlFor="login-password">
          <input
            type="text"
            data-testid="password-input"
            id="login-password"
            name="password"
            onChange={ this.handleChange }
            value={ password }
            placeholder="Insira sua senha"
            required
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          id="login-btn-submit"
          // REFERENCIA DE VALIDAÇÃO REGEX = https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
          disabled={ !EMAIL_REGEX.test(email) || password.length < MIN_CHARACTHERS }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(actionRegisterUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  registerUser: PropTypes.func.isRequired,
};
