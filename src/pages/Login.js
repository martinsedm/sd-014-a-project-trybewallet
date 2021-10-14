import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input type="email" data-testid="email-input" name="email" />
        <input type="password" data-testid="password-input" name="password" />
        <button type="button" name="entrar"> Entrar </button>
      </form>
    );
  }
}

export default Login;
