import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <h1>Login: </h1>
          <input type="email" name="login" data-testid="email-input" />
          <input type="password" name="senha" data-testid="password-input" />
          <input type="button" value="Entrar" />
        </form>
      </div>
    );
  }
}

export default Login;
