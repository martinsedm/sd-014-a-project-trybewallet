import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <input type="text" data-testid="email-input" />
        <input type="text" data-testid="password-input" />
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
