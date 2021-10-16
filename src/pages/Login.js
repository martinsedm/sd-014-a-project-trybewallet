import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   email: '',
    //   password: '',
    // };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {

  }

  render() {
    // const { email, password } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              name="password"
              id="password"
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
