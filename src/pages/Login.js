import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const verifyEmail = /\S+@\S+\.\S+/;

    return (
      <div>
        <input
          type="email"
          name="email"
          pĺaceholder="E-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          pĺaceholder="Senha"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          onClick={ this.handleChange }
          disabled={ !verifyEmail.test(email) || password.length < 6 }>
            Entrar
        </button>
      </div>
    );
  }
}

export default Login;
