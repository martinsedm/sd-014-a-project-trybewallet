import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      validEmail: false,
      validPassword: false,
      email: '',
    };

    this.handleVerification = this.handleVerification.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleVerification({ target }) {
    this.setState({
      [target.name]: target.value,
    });

    if (target.name === 'email') {
      // src: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
      const regex = /\S+@\S+\.\S+/;
      const validEmail = regex.test(target.value);

      this.setState({
        validEmail,
      });
    } else {
      const CARACTERES_SENHA = 6;
      const validPassword = target.value.length >= CARACTERES_SENHA;

      this.setState({
        validPassword,
      });
    }
  }

  handleClick() {
    const { email } = this.state;
    const { dispatchEmail } = this.props;

    dispatchEmail(email);
  }

  render() {
    const { validEmail, validPassword } = this.state;
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleVerification }
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleVerification }
            />
          </label>

          <Link to="/carteira">
            <button
              type="button"
              disabled={ !(validEmail && validPassword) }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </Link>

        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(userEmail(email)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
