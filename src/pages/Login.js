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
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
