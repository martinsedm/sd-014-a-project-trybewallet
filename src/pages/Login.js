import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validate(email, password) {
    const MIN_PASS_LENGTH = 5;
    return (/\S+@\S+\.\S+/).test(email) && password.length > MIN_PASS_LENGTH;
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={ (e) => {
            e.preventDefault();
          } }
        >
          <Input
            htmlFor="email"
            placeholder="Insert Email"
            value={ email }
            handleChange={ this.handleChange }
          />
          <Input
            htmlFor="password"
            placeholder="Insert Password"
            value={ password }
            handleChange={ this.handleChange }
            type="password"
          />
          <Button
            type="submit"
            text="Entrar"
            disabled={ !this.validate(email, password) }
          />
        </form>
      </div>
    );
  }
}

export default Login;
