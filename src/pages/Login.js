import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <input type="password" data-testid="password-input" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
