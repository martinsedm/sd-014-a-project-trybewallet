import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <input
          name="email"
          type="text"
          data-testid="email-input"
        />
        <input
          name="password"
          type="text"
          data-testid="password-input"
        />
        <button
          type="submit"
          // disabled
        >
          Entrar
        </button>
      </div>);
  }
}

export default Login;
