import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            Email:
            <input type="email" data-testid="email-input" />
          </div>
          <br />
          <div>
            Senha:
            <input type="password" data-testid="password-input" />
          </div>
          <br />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
