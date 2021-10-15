import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <p>Login</p>
        <input
          name="email"
          type="text"
          value={ email }
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="text"
          value={ password }
          data-testid="password-input"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
