import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const { email } = this.state;
    const { history, loginDispatch } = this.props;
    loginDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const EMAIL_REGEX = /.+@.+\..+/;
    const MIN_PASSWORD_LENGTH = '6';
    return (
      <form>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <br />
        <input
          data-testid="password-input"
          type="text"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <br />
        <button
          type="submit"
          disabled={ !EMAIL_REGEX.test(email) || password.length < MIN_PASSWORD_LENGTH }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email) => dispatch(login(email)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
