import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser as setUserAction } from '../actions';
import './Login.css';

const Login = ({ setUser }) => {
  const [emailAddress, setEmailAddress] = useState({ address: '', isValid: false });
  const [password, setPassword] = useState({ password: '', isValid: false });
  const PASSWORD_MIN_LENGTH = 6;

  const handlePassword = ({ target: { value } }) => {
    setPassword({ password: value, isValid: value.length >= PASSWORD_MIN_LENGTH });
  };

  const handleEmailAddress = ({ target: { value } }) => {
    const testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (testEmail.test(value)) { setEmailAddress({
      address: value, isValid: true,
    });
    } else { setEmailAddress({ isValid: false }); }
  };

  return (
    <main>
      <div className="login__container">
        <h3>Acesse sua carteira digital!</h3>
        <div className="login__input">
          <input
            type="email"
            data-testid="email-input"
            onChange={ handleEmailAddress }
            placeholder="Email"
          />
          <input
            data-testid="password-input"
            type="password"
            onChange={ handlePassword }
            value={ password.password }
            placeholder="Senha"
          />
          <Link to="/carteira">
            <button
              disabled={ !password.isValid || !emailAddress.isValid }
              type="submit"
              onClick={ () => setUser(emailAddress) }
              className="btn__login"
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.value,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (email) => dispatch(setUserAction(email.address)),
});

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
