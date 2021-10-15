import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmailUser } from '../actions';
import logo from '../logo.svg';

// import '../style/login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      MIN_LENGTH_PASS: 6,
    };
  }

  // validando os campos do input Login fonte https://pt.stackoverflow.com/questions/283129/formulario-email-react
  emailValid() {
    const { email } = this.state;
    if (email) {
      const validEmail = /\S+@\S+\.\S+/;
      return validEmail.test(email);
    }
  }

  passwordValid() {
    const { password, MIN_LENGTH_PASS } = this.state;
    if (password.length >= MIN_LENGTH_PASS) return true;
    return false;
  }

  render() {
    const { email, password } = this.state;
    const { getEmail } = this.props;
    return (
      <div className="ctn-login">
        <img className="login-logo" alt="Trybe Wallet Logo" src={ logo } />
        <h1>TrybeWallet React</h1>
        <input
          className="login-input"
          data-testid="email-input"
          value={ email }
          type="email"
          placeholder="Informe seu email"
          onChange={ (e) => this.setState({ email: e.target.value }) }
        />
        <input
          className="login-input"
          data-testid="password-input"
          type="password"
          value={ password }
          placeholder="Informe sua senha"
          onChange={ (e) => this.setState({ password: e.target.value }) }
        />
        <Link to="/carteira">
          <button
            className="login-button"
            type="button"
            disabled={ !this.emailValid() || !this.passwordValid() }
            onClick={ () => getEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(setEmailUser(email)),
});

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
