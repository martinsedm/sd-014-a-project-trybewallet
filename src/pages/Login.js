import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setEmail } from '../actions';
import Input from '../components/Input';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loged: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { email } = this.state;
    const { emailDispatch } = this.props;

    event.preventDefault();
    emailDispatch(email);
    this.setState({ loged: true });
  }

  // Codigo foi pego do Stackoverflow
  emailValidation(email) {
    const i = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return i.test(String(email).toLowerCase());
  }

  render() {
    const { email, password, loged } = this.state;
    const { handleChange, handleSubmit, emailValidation } = this;
    const SIX = 6;
    if (loged) return <Redirect to="/carteira" />;
    return (
      <form onSubmit={ handleSubmit }>
        <fieldset>
          <Input id="email" tag="Email" value={ email } func={ handleChange } />
          <Input id="password" tag="Senha" value={ password } func={ handleChange } />
          <button
            type="submit"
            disabled={ !emailValidation(email) || password.length < SIX }
          >
            Entrar
          </button>
        </fieldset>
      </form>
    );
  }
}

Login.propTypes = { emailDispatch: PropTypes.func.isRequired };

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (payload) => dispatch(setEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
