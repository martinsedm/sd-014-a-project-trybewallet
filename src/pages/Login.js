import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin as userLoginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateAcess = this.validateAcess.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { email } = this.state;
    const { history, userLogin } = this.props;
    userLogin({ email });
    history.push('/carteira');
  }

  // Realizei essa função de validação de email consultando https://ui.dev/validate-email-address-javascript/
  validateAcess(email, password) {
    const minCharacter = 6;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= minCharacter;
    return emailValid && passwordValid;
  }

  render() {
    const { email, password } = this.state;

    return (
      <form>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
          placeholder="Insira o seu email"
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          data-testid="password-input"
          placeholder="Insira a sua senha"
        />
        <button
          type="submit"
          disabled={ !this.validateAcess(email, password) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(userLoginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
