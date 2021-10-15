import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          data-testid="email-input"
        />
        <input
          type="text"
          data-testid="password-input"
        />
        <button>Entrar</button>
      </form>
    );
  }
}

export default Login;
