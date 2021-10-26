import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import animationData from '../lottie/wallet.json';
import '../styles/login.css';

import { setUserEmail } from '../actions';
import { emailVerification, passwordVerification } from '../services/auth';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
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

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { emailCondition, passwordCondition } = this.state;
    const buttonDisabled = !(emailCondition && passwordCondition);
    return (
      <main className="login-page d-flex">
        <section className="d-flex align-items-center">
          <Lottie
            options={ defaultOptions }
            height={ 500 }
          />
        </section>
        <section
          className="w-50 d-flex flex-column
          justify-content-center align-items-center"
        >
          <form
            className="form-login d-flex flex-column align-items-center
            rounded text-center p-5"
          >
            <h1 className="text-white fw-bold">Login</h1>
            <input
              data-testid="email-input"
              type="email"
              className="form-control mt-2"
              placeholder="Email"
              name="email"
              onChange={ (event) => {
                this.handleChange(event);
                this.handleCondition(event);
              } }
              id="email"
            />
            <input
              data-testid="password-input"
              type="password"
              className="form-control mt-2"
              placeholder="Senha"
              name="password"
              onChange={ this.handleCondition }
              id="password"
            />
            <button
              type="button"
              className="fw-bold fs-1 btn btn-danger mt-4 w-75"
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
