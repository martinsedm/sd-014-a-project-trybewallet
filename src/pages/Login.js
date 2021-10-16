import React, { useState } from 'react';

const Login = () => {
  const [emailAddress, setEmailAddress] = useState({ address: '', isValid: false });
  const [password, setPassword] = useState({ password: '', isValid: false });

  const PASSWORD_MIN_LENGTH = 6;

  const handlePassword = ({ target: { value } }) => {
    setPassword({ password: value, isValid: value.length >= PASSWORD_MIN_LENGTH });
  };

  const handleEmailAddress = ({ target: { value } }) => {
    const testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (testEmail.test(value)) {
      setEmailAddress({ address: value, isValid: true });
    } else { setEmailAddress({ isValid: false }); }
  };

  return (
    <div>
      <h3>Login</h3>
      <input type="email" data-testid="email-input" onChange={ handleEmailAddress } />
      <input
        data-testid="password-input"
        type="password"
        minLength="6"
        onChange={ handlePassword }
        value={ password.password }
      />
      <button disabled={ !password.isValid || !emailAddress.isValid } type="submit">
        Entrar
      </button>
    </div>
  );
};

export default Login;
