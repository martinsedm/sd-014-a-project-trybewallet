import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { emailSave } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { emailDispatch } = this.props;
    const { email } = this.state;
    emailDispatch(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, redirect } = this.state;
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const validEmail = regexEmail.test(email);
    const VALID_PASSWORD = 6;

    if (redirect) return <Redirect to="/carteira" />;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !(password.length >= VALID_PASSWORD && validEmail) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    emailDispatch: (email) => dispatch(emailSave(email)),
  });

export default connect(null, mapDispatchToProps)(Login);
