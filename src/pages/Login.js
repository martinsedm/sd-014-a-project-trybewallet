import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      email: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { email } = this.state;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          placeholder="Digite seu email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          placeholder="Digite a senha"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
