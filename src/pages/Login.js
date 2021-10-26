import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser as setUserAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.verifyInfo = this.verifyInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  verifyInfo() {
    const { email, password } = this.state;
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const MINIMUM_CHARACTERS = 6;
    if (validEmail.test(email) && password.length > MINIMUM_CHARACTERS - 1) return false;

    return true;
  }

  handleClick() {
    const { email } = this.state;
    const { setUser, history } = this.props;
    setUser(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
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
            id="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ this.verifyInfo() }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  setUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (email) => dispatch(setUserAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
