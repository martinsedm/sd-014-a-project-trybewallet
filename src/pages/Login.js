import React from 'react';
import '../styles/login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  enableBtn(email, password) {
    const minimumNumber = 6;

    // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    // regex -> author:Matheus Battisti
    // /^((?!.)[\w-_.]*[^.])(@\w+)(.\w+(.\w+)?[^.\W])$/gm; ----- /\S+@\S+\.\S+/
    const regex = /\S+@\S+\.\S+/;

    const validationEmail = regex.test(email);
    if (validationEmail && password.length >= minimumNumber) return true;
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="containner">
        <div className="containner border">
          <div>
            <img className="logo" src="/img/try.png" alt="logo_trybe_wallat" />
            <img className="imgWallat" src="/img/wallat.jpg" alt="img wallat" />
          </div>
          <h2 className="textLogo">Wallet</h2>
          <input
            placeholder="Email"
            className="inputEmail"
            data-testid="email-input"
            name="email"
            value={ email }
            type="email"
            onChange={ this.handlechange }
          />
          <input
            placeholder="Senha"
            className="inputPassword"
            data-testid="password-input"
            name="password"
            value={ password }
            type="password"
            onChange={ this.handlechange }
          />
          <button
            className={ this.enableBtn(email, password) ? 'btnActivated' : 'btnDisabled' }
            disabled={ !this.enableBtn(email, password) }
            type="button"
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
