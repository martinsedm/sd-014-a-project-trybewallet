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
      const { password }=this.state;
      const minInputLength = 6;
      if (password.length >= minInputLength) {
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
