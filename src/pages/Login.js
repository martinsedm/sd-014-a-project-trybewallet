import React from 'react';
import './stylesPages.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const { email, password } = this.state;
      const MIN_LENGTH = 6;
      const FORMAT_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);

      if (password.length >= MIN_LENGTH && FORMAT_EMAIL) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    });
  }

  async handleClick() {
    const { email } = this.state;
    const { history, addEmailInput } = this.props;
    await addEmailInput(email);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;
    return (
      <form className="div-login">
        <label htmlFor="input-email">
          <input
            type="email"
            name="email"
            id="input-email"
            placeholder="user@email.com"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-password">
          <input
            type="password"
            name="password"
            id="input-password"
            placeholder="password123"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          id="botao-submit"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </form>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  addEmailInput: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addEmailInput: (email) => dispatch(addEmail(email)) });

export default connect(null, mapDispatchToProps)(Login);
