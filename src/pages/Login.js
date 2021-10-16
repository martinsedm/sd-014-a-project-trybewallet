import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          data-testid="email-input"
          placeholder="Email"
        />
        <input
          data-testid="password-input"
          placeholder="Password"
        />
      </div>
    );
  }
}

export default Login;
