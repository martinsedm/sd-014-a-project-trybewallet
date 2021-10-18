import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loginSave as loginSaveAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleOnClick(event) {
    event.preventDefault();
    const { dispatchLogin, history } = this.props;
    const { email } = this.state;
    dispatchLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const validateEmail = 'alguem@email.com';

    return (
      <div>
        <h2>Trybe Wallet</h2>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="email"
            value={ email }
            onChange={ this.handleOnChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleOnChange }
          />
          <button
            onClick={ this.handleOnClick }
            type="button"
            disabled={ password.length < passwordLength
               || email !== validateEmail }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(loginSaveAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
