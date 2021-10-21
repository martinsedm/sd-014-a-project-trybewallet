import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { sendLoginInformation } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  enableButton() {
    const { password } = this.state;
    const MIN_LENGTH = 6;
    if (password.length < MIN_LENGTH) return true;
    if (!this.emailValidation()) return true;
    return false;
  }

  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  emailValidation() {
    const { email } = this.state;
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailValidation.test(email);
  }

  handleClick(event) {
    const { loginInfoStore } = this.props;
    const { email } = this.state;
    event.preventDefault();
    loginInfoStore(email);
    this.setState({ redirect: '/carteira' });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={ redirect } />;
    }

    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ this.enableButton() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  loginInfoStore: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  loginInfoStore: (email) => dispatch(sendLoginInformation(email)),
});

export default connect(null, mapDispatchToProps)(Login);
