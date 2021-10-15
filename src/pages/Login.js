import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
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
    const MIN_PWD_LENGTH = 6;
    const { state: { password, email } } = this;
    const isDisabled = password.length >= MIN_PWD_LENGTH;
    return (
      <form>
        <Input
          type="text"
          onChange={ this.handleChange }
          testId="email-input"
          value={ email }
          name="email"
        />
        <Input
          type="password"
          onChange={ this.handleChange }
          testId="password-input"
          value={ password }
          name="password"
        />
        <Button
          type="button"
          onClick={ () => console.log('ola') }
          content="Entrar"
          isDisabled={ !isDisabled }
        />
      </form>
    );
  }
}

export default Login;
