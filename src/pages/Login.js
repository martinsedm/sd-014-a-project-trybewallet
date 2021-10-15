import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passwordInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleSubmit(event) {
    console.log('Um nome foi enviado:');
    event.preventDefault();
  }

  render() {
    const { email, passwordInput } = this.state;
    const senhaMin = 6;
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              type="password"
              name="passwordInput"
              value={ passwordInput }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="submit"
            disabled={ passwordInput.length < senhaMin }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

export default Login;
