import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Insira o seu email"
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Insira a sua senha"
        />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
