import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              name="email"
            />
          </label>
          <label htmlFor="senha">
            Password:
            <input
              data-testid="password-input"
              type="password"
              name="senha"
            />
          </label>
        </form>
        <button type="submit">Enviar</button>
      </fieldset>

    );
  }
}

export default Login;
