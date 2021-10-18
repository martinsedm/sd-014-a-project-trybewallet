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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const MAX_LEN = 6;
    return (
      <div>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          className="button"
          type="submit"
          disabled={
            !email
            || !password
            || email.split('.').includes('com') === false
            || (password.length >= MAX_LEN) === false
          }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
