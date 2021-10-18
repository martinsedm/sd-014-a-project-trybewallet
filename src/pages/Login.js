import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      button: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleButton() {
    const { email, password } = this.state;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinLentgh = 5;
    if (checkEmail.test(email) && password.length >= passwordMinLentgh) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.handleButton();
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <section>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="E-mail"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            value={ password }
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ button }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
