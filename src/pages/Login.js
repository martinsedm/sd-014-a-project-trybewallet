import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabledBtn: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      const { password } = this.state;
      const disabledBtn = !document.loginForm.checkValidity() || (password !== '123456');
      this.setState({
        disabledBtn,
      });
    });
  }

  handleClick() {
    const { email, password } = this.state;
    console.log(email, password);
  }

  render() {
    const { email, password, disabledBtn } = this.state;
    return (
      <section>
        <form name="loginForm">
          <fieldset>
            <legend>Faça seu login</legend>
            <label htmlFor="email-input">
              Email:
              <input
                type="email"
                name="email"
                id="email-input"
                data-testid="email-input"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password-input">
              Senha:
              <input
                type="password"
                name="password"
                id="password-input"
                data-testid="password-input"
                value={ password }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              disabled={ disabledBtn }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Login;
