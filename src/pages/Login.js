import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  isDisabled() {
    const { email, password } = this.state;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Reference: https://emailregex.com/
    const MIN_LENGTH = 6;
    return !regex.test(email) || password.length < MIN_LENGTH;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
            placeholder="Email"
            type="email"
            value={ email }
          />
          <input
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
            placeholder="Senha"
            type="password"
            value={ password }
          />
          <button disabled={ this.isDisabled() } type="button">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
