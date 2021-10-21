import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          data-testid="password-input"
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
