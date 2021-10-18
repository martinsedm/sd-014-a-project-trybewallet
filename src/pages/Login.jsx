import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEmailInStateAction, fetchCurrenciesAction } from '../actions';
import '../styles/login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const MIN_LENGTH = 6;
      const PASSWORD_LENGTH = password.length >= MIN_LENGTH;
      const EMAIL_FORMAT = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
      // https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
      // const EMAIL_FORMAT = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email);

      if (PASSWORD_LENGTH && EMAIL_FORMAT) {
        this.setState({ isValid: true });
      } else {
        this.setState({ isValid: false });
      }
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { history, saveEmailInState, fetchCurrencies } = this.props;
    const { email } = this.state;

    saveEmailInState(email);
    fetchCurrencies();
    history.push('/carteira');
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <main className="login-container">
        <div className="main-content">
          <form className="login-form">
            <div>Login</div>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
            <button
              type="submit"
              disabled={ !isValid }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
            <div className="sm-text">Ainda não tem uma conta?</div>
          </form>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  saveEmailInState: PropTypes.func.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmailInState: (email) => dispatch(saveEmailInStateAction(email)),
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
});

export default connect(null, mapDispatchToProps)(Login);
