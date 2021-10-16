import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logInput } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectClick = this.redirectClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { inLog } = this.props;
    this.setState({ [name]: value });
    if (name === 'email') {
      inLog(value);
    }
  }

  validation() {
    const MIN_LENTGH = 6;
    const { email, password } = this.state;
    if (/\S+@\S+\.\S+/.test(email) && password.length >= MIN_LENTGH) {
      return false;
    }
    return true;
  }
  // <Referência: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/>

  redirectClick() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    return (
      <form>
        <div>Login</div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
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

// Funciona, só estou comentando pq o test não gostou
// const mapStateToProps = (state) => ({
//   email: state.reducers.user.email });

function mapDispatchToProps(dispatch) {
  return {
    inLog(value) {
      const action = logInput(value);
      dispatch(action);
    },
  };
}

Login.propTypes = {
  inLog: PropTypes.func,
  email: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
