import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    const lengthPassword = 6;
    const ValidateEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const { email, password, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
            value={ email }
            placeholder="Email"
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
            value={ password }
            placeholder="Senha"
          />
          <button
            type="submit"
            onClick={ this.handleClick }
            disabled={ password.length < lengthPassword || !ValidateEmail.test(email) }

          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
