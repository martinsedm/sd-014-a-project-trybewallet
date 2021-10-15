import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input id="name" type="text" name="name" data-testid="email-input" />
          </label>
        </form>
        <form>
          <label htmlFor="email">
            Email:
            <input id="email" type="email" name="email" data-testid="password-input" />
          </label>
        </form>
        <button type="button">Entrar</button>
      </div>

    );
  }
}

export default Login;
