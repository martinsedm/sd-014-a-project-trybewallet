import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            type="email"
            data-testid="email-input"
            placeholder="Email"
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
          />
          <input
            type="submit"
            value="Entrar"
          />
        </form>
      </section>
    );
  }
}

export default Login;
