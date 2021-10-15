import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value="emailinput"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              type="password"
              name="password"
              value="passwordinput"
              data-testid="password-input"
            />
          </label>
        </form>
      </>
    );
  }
}

export default Login;
