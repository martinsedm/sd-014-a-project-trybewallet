import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Faça seu login</legend>
          <label htmlFor="email">
            E-mail
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              data-testid="email-input"
              // onChange={ }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              data-testid="password-input"
              // onChange={ }
            />
          </label>
        </fieldset>
        <button
          type="button"
          // onClick={ }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
