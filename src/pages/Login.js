import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.ValidandoLogin = this.ValidandoLogin.bind(this);
  }

  handleInput({ target }) {
    const { type, value } = target;
    this.setState({
      [type]: value,
    });
  }

  ValidandoLogin() {
    const { password, email } = this.state;
    const PASSWORD_VALIDO = 6;
    const EMAIL_VALIDO = email.match(/\S+@\S+\.\S+/);
    return password.length >= PASSWORD_VALIDO && EMAIL_VALIDO;
  }

  render() {
    const { email, password } = this.state;
    const { setUserLogin, history } = this.props;

    return (
      <div>
        <form action="">
          <h1>Login: </h1>
          <input
            type="email"
            data-testid="email-input"
            onChange={ this.handleInput }
            value={ email }
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ this.handleInput }
            value={ password }
          />
          <input
            type="button"
            value="Entrar"
            disabled={ !this.ValidandoLogin() }
            onClick={ () => {
              setUserLogin({ email, password });
              history.push('/carteira');
            } }
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserLogin: (value) => dispatch(userLogin(value)),
});

Login.propTypes = {
  setUserLogin: PropTypes.func,
}.isRiquired;

export default connect(null, mapDispatchToProps)(Login);
