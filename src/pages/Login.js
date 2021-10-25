import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmailAtState as saveEmailAtStateAction } from '../redux/actions';
import LoginComplement from './LoginComplement';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const MIN_CHARACTERS = 6;
      const MIN_PASSWORD = password.length >= MIN_CHARACTERS;
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
      if (MIN_PASSWORD && emailRegex) {
        this.setState({ isValid: true });
      } else {
        this.setState({ isValid: false });
      }
    });
  }

  handleLogin(event) {
    event.preventDefault();
    const { history, saveEmailAtState } = this.props;
    const { email } = this.state;
    saveEmailAtState(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <div className="login-field">
        <form
          style={ {
            margin: '60px',
            width: '90%',
          } }
        >
          <h2 className="text-center">Login</h2>
          <label htmlFor="email" className="form-group">
            <input
              style={ { width: '195%' } }
              placeholder="E-mail"
              data-testid="email-input"
              onChange={ this.handleChange }
              type="email"
              value={ email }
              name="email"
              className="form-control"
            />
          </label>
          <label htmlFor="password" className="form-group">
            <input
              style={ { width: '195%' } }
              className="form-control"
              placeholder="Password"
              data-testid="password-input"
              onChange={ this.handleChange }
              type="password"
              name="password"
              value={ password }
            />
          </label>
          <button
            disabled={ !isValid }
            type="submit"
            onClick={ this.handleLogin }
            className="btn btn-primary btn-block"
          >
            Entrar
          </button>
          <nav>
            <LoginComplement />
          </nav>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmailAtState: (email) => dispatch(saveEmailAtStateAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  saveEmailAtState: PropTypes.func.isRequired,
};
