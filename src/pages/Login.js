import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLoginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
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

  verifyLogin(email, password) {
    const validEmail = /\S+@+\S+\.\S/.test(email);
    const VALID_PASSWORD = 6;

    if (validEmail && password.length >= VALID_PASSWORD) {
      // this.setState({
      //   redirect: true,
      // });
      return true;
    }
  }

  handleClick() {
    const { email } = this.state;
    const { userLogin } = this.props;
    userLogin(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !this.verifyLogin(email, password) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(userLoginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
