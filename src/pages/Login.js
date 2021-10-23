import React from 'react';
import Input from '../components/Input';

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
    const { value, name } = target;
    // console.log(this.state.email);
    this.setState({
      [name]: value,
    });
  }

  validateEmail(email) {
    const emailLower = email.toLowerCase();
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailRegex.test(emailLower);
  }

  render() {
    const { email, password } = this.state;
    const MIN = 6;
    return (
      <div>
        Login:
        <Input
          id="email"
          nomeLabel="Email:"
          valueId={ email }
          onChangeInput={ this.handleChange }
        />
        <Input
          id="password"
          nomeLabel="Password:"
          valueId={ password }
          onChangeInput={ this.handleChange }
        />

        <button
          type="button"
          disabled={ password.length < MIN || !this.validateEmail(email) }
        >
          Entrar

        </button>

      </div>);
  }
}

export default Login;
