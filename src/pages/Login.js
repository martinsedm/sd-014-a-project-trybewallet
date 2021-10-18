import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
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
