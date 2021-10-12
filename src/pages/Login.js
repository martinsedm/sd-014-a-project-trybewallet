import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isEnable: false,
    };
  }

  render() {
    const { isEnable } = this.state;
    return (
      <form>
        <input type="email" data-testid="email-input" placeholder="Email" />
        <input type="text" data-testid="password-input" placeholder="Email" />
        <input type="submmit" value="Entrar" disabled={ !isEnable } />
      </form>
    );
  }
}

export default Login;
