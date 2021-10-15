import React from 'react';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    console.log('click');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-container">
        <main>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              id="password"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </main>
      </div>
    );
  }
}

export default Login;
