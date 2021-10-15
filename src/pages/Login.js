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
  }

  render() {
    const { email, password, disabledButton } = this.state;
    return (
      <div>
        <div>
          <input
            type="email"
            placeholder="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            placeholder="senha"
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
