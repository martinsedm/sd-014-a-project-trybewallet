import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      const { password, email } = this.state;
      const MIN_KEY_LENGTH = 6;
      const VALID_EMAIL = email.includes('@' && '.com');
      console.log(VALID_EMAIL);
      if (password.length >= MIN_KEY_LENGTH && VALID_EMAIL) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <form>
        <Input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Button
          name="button"
          disabled={ isDisabled }
          label="Entrar"
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

export default Login;
