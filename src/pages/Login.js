import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <label
            data-testid="email-input"
            htmlFor="email"
          >
            Email:
            <input
              type="text"
            />
          </label>

          <label
            data-testid="password-input"
            htmlFor="email"
          >
            Senha:
            <input
              type="text"
            />
          </label>
          <button
            type="submit"
          >
            Entrar

          </button>

        </fieldset>
      </div>
    );
  }
}

export default Login;
