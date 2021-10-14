import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
   
  }

  render() {
    const { login, password } = this.state;
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    return (
      <div>
        <form>
          <label htmlFor='login'>
            <input
              data-testid='email-input'
              onChange={this.handleChange}
              name='login'
              id='login'
              type='email'
            />
          </label>
          <label htmlFor='password'>
            <input
              data-testid='password-input'
              onChange={this.handleChange}
              name='password'
              id='password'
              type='password'
            />
          </label>
          <button type='button' onClick={this.handleChange} data-testid='my-action' disabled={ !regex.test(login) || password.length < 6 } >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
