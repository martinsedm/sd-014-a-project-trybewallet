import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserInfoAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log('onSubmit called..');
    const { history, dispatchUserInfo } = this.props;
    const { user } = this.state;
    dispatchUserInfo(user);
    history.push('/carteira');
  }

  // Peguei o regex do link https://www.w3resource.com/javascript/form/email-validation.php
  emailValidation() {
    const { user } = this.state;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(String(user.email).toLowerCase());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((previousState) => ({
      user: {
        ...previousState.user,
        [name]: value,
      },
    }));
  }

  render() {
    const minPasswordLength = 6;
    const { user } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !this.emailValidation() || user.password.length < minPasswordLength }
          onClick={ this.onSubmit }
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
  dispatchUserInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUserInfo: (payload) => dispatch(setUserInfoAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
