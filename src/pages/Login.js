import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="text"
            name="email"
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
          />
          <button type="button"> Entrar </button>
        </form>
      </div>
    );
  }
}

export default Login;
