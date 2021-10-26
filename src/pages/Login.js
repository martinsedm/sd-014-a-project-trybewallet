import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value="email"
          onChange=""
          placeholder="EMAIL"
        />

        <input
          data-testid="password-input"
          type="password"
          name="password"
          value="password"
          onChange=""
          placeholder="PASSWORD"
        />

        <button
          type="submit"
        >
          Entrar
        </button>
      </form>);
  }
}

export default Login;
