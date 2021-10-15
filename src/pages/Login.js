import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <h3>Login</h3>
        <input type="text" name="login" id="login" data-testid="email-input" />
        <input type="text" name="password" id="password" data-testid="password-input" />
        <div>
          <button type="button">Entrar</button>
        </div>
      </main>
    );
  }
}

export default Login;
