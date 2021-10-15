import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkInputsData = this.checkInputsData.bind(this);
  }

  checkInputsData() {
    let notAllow = 0;
    const passwordLength = 6;
    const { email, password } = this.state;
    const emailArroba = email.split('@');
    if (password.length >= passwordLength) {
      notAllow += 1;
    }
    if (emailArroba.length === 2 && emailArroba[1].includes('.com')) {
      notAllow += 1;
    }
    if (notAllow === 2) {
      this.setState({ disabled: false });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.checkInputsData());
  }

  render() {
    const { disabled, email, password } = this.state;

    return (
      <form>
        <input
          type="text"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="text"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
