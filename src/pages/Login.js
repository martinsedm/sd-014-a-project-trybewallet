import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionLogin } from '../actions';

import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);

    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const MINCODE = 6;
    const emailValid = /\S+@\S+\.\S+/;
    // Referencia: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    return (
      <div id="login">
        <span className="title"> TrybeWallet </span>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="EMAIL"
          className="inputs"
        />

        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="PASSWORD"
          className="inputs"
        />

        <button
          type="submit"
          disabled={ password.length < MINCODE || email.search(emailValid) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>);
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatchEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatchEmail: (emailValue) => dispatch(actionLogin(emailValue)),
  }
);

export default connect(null, mapDispatchToProps)(Login);
