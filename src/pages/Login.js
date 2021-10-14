import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionRegisterUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { login } = this.state;
    const { history, registerUser } = this.props;
    console.log(history);
    registerUser(login);
    history.push('/carteira');
  }

  render() {
    const { login, password } = this.state;
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    const MAX_LENGTH = 6;
    return (
      <div>
        <form>
          <label htmlFor="login">
            <input
              data-testid="email-input"
              onChange={ this.handleChange }
              name="login"
              id="login"
              type="email"
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              onChange={ this.handleChange }
              name="password"
              id="password"
              type="password"
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
            data-testid="my-action"
            disabled={ !regex.test(login) || password.length < MAX_LENGTH }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(actionRegisterUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func,
  }).isRequired,
  registerUser: PropTypes.func.isRequired,
};
