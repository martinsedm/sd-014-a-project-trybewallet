import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { emailForAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      passwordLength: 0,
    };

    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectClick = this.redirectClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    if (name === 'passwordLength') {
      return this.setState({ [name]: value.length });
    }
    return this.setState({ [name]: value });
  }

  validation() {
    const MIN_LENTGH = 6;
    const { passwordLength, email } = this.state;
    if (/\S+@\S+\.\S+/.test(email) && passwordLength >= MIN_LENTGH) {
      return false;
    }
    return true;
  }
  // <Referência: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/>

  redirectClick() {
    const { email } = this.state;
    const { setEmail } = this.props;
    setEmail(email);
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email } = this.state;
    return (
      <form>
        <div>Login</div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="example@email.com"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="passwordLength"
            placeholder="******"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ this.validation() }
          type="button"
          onClick={ this.redirectClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setEmail(payload) {
      const action = emailForAction(payload);
      dispatch(action);
    },
  };
}

Login.propTypes = {
  emailForAction: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
