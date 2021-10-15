import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
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
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          name="email"
          id="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
        />
        <button
          type="submit"
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
