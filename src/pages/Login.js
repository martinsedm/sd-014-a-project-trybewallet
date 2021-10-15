import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const MIN_LENGTH = 6;
    const REGEX_VALID_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    /* Encontrado em: https://stackoverflow.com/questions/647282/is-there-an-onselect-event-or-equivalent-for-html-select */
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            type="email"
            id="email"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            data-testid="password-input"
            type="text"
            id="password"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ password.length < MIN_LENGTH || !(REGEX_VALID_EMAIL.test(email)) }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
