import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          pĺaceholder="E-mail"
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          pĺaceholder="Senha"
          data-testid="password-input"
        />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
