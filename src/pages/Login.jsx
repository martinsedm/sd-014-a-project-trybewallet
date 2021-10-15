import React from 'react';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const MIN_LENGTH = 6;
      const PASSWORD_LENGTH = password.length >= MIN_LENGTH;
      const EMAIL_FORMAT = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
      // const EMAIL_FORMAT = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email);

      if (PASSWORD_LENGTH && EMAIL_FORMAT) {
        this.setState({ isValid: true });
      } else {
        this.setState({ isValid: false });
      }
    });
  }

  handleClick() {
    const { history } = this.props;
    console.log('click');
    history.push('/carteira');
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <div className="login-container">
        <main>

          <input
            placeholder="Email"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />

          <input
            placeholder="password"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />

          <button
            type="submit"
            onClick={ this.handleClick }
            disabled={ !isValid }
          >
            Entrar
          </button>
        </main>
      </div>
    );
  }
}

export default Login;
