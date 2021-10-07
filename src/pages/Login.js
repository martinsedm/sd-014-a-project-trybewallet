import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUserEmail } from '../actions';
import { emailVerification, passwordVerification } from '../services/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailCondition: false,
      passwordCondition: false,
    };
    this.handleCondition = this.handleCondition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleCondition({ target: { value, name } }) {
    if (name === 'email') {
      const emailCondition = emailVerification(value);
      this.setState({ emailCondition });
    } else if (name === 'password') {
      const passwordCondition = passwordVerification(value);
      this.setState({ passwordCondition });
    }
  }

  handleClick() {
    const { email } = this.state;
    const { history, dispatchEmail } = this.props;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { emailCondition, passwordCondition } = this.state;
    const buttonDisabled = !(emailCondition && passwordCondition);
    return (
      <main>
        <section>
          <h1>Login</h1>
          <form>
            <label htmlFor="email">
              Email:
              <input
                data-testid="email-input"
                type="email"
                name="email"
                onChange={ (event) => {
                  this.handleChange(event);
                  this.handleCondition(event);
                } }
                id="email"
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                data-testid="password-input"
                type="password"
                name="password"
                onChange={ this.handleCondition }
                id="password"
              />
            </label>
            <button
              type="button"
              onClick={ this.handleClick }
              disabled={ buttonDisabled }
            >
              Entrar
            </button>
          </form>
        </section>
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatchEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(setUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
