import React from 'react';
// import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {

  }

  render() {
    const { email, password, disabledButton } = this.state;
    return (
      <div>
        Faça seu login
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            placeholder="senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </div>
        <button
          type="button"
          disabled={ disabledButton }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
