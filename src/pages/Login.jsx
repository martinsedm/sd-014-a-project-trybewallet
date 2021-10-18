import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectUser as selectUserAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.enviarRelatorio = this.enviarRelatorio.bind(this);
  }

  validateEmail(email) {
    // Redux tirado do site:
    // https://www.codingame.com/playgrounds/9396/redux-form-validation-tutorial
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(String(email).toLowerCase());
  }

  checkInputs() {
    const { email, senha } = this.state;
    const minCarac = 6;
    let result = true;
    if (senha.length >= minCarac && this.validateEmail(email)) {
      result = false;
    }
    return result;
  }

  enviarRelatorio() {
    const { selectUser, history } = this.props;
    const { email } = this.state;
    selectUser(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { handleChange, enviarRelatorio, checkInputs } = this;
    const { email, senha } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            value={ email }
            type="email"
            name="email"
            onChange={ handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            value={ senha }
            type="password"
            name="senha"
            onChange={ handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          onClick={ enviarRelatorio }
          disabled={ checkInputs() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  selectUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  selectUser: (email) => dispatch(selectUserAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
