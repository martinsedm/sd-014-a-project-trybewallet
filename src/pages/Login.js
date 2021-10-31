import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { attEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handdleChange = this.handdleChange.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.handdleClick = this.handdleClick.bind(this);
  }

  async handdleChange({ target }) {
    await this.setState({
      [target.name]: target.value,
    });
  }

  checkInputs() {
    const { password, email } = this.state;
    const PASSWORD_LENGTH = 6;
    const checkPassword = password.length >= PASSWORD_LENGTH;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !checkPassword || !checkEmail.test(email);
  }

  handdleClick() {
    const { email } = this.state;
    const { setEmail, history } = this.props;
    setEmail(email);
    history.push('/carteira');
  }

  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="Insira seu Email"
            data-testid="email-input"
            onChange={ this.handdleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Insira sua Senha"
            data-testid="password-input"
            onChange={ this.handdleChange }
          />
        </label>
        <button
          type="button"
          disabled={ this.checkInputs() }
          onClick={ this.handdleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (payload) => dispatch(attEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
