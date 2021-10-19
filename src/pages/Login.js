import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEmail, addPassword } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIsValid: false,
      passwordIsValid: false,
    };
    document.title = 'TrybeWallet-Login';
    this.validateEmailAndPassword = this.validateEmailAndPassword.bind(this);
  }

  validateEmailAndPassword({ name, value }) {
    const SIX = 6;
    switch (name) {
    case 'email-input':
      // regex taken from https://www.w3resource.com/javascript/form/email-validation.php
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.setState({ emailIsValid: true });
      } else {
        this.setState({ emailIsValid: false });
      }
      break;
    case 'password-input':
      if (value.length >= SIX) {
        this.setState({ passwordIsValid: true });
      } else {
        this.setState({ passwordIsValid: false });
      }
      break;
    default:
      console.log('A function got called improperly');
      break;
    }
  }

  render() {
    const { dispatchEmail, dispatchPassword } = this.props;
    const { emailIsValid, passwordIsValid } = this.state;
    return (
      <>
        <input
          type="text"
          data-testid="email-input"
          onChange={ ({ target }) => {
            dispatchEmail(target.value);
            this.validateEmailAndPassword(target);
          } }
          name="email-input"
        />
        <input
          type="text"
          data-testid="password-input"
          onChange={ ({ target }) => {
            dispatchPassword(target.value);
            this.validateEmailAndPassword(target);
          } }
          name="password-input"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !(emailIsValid && passwordIsValid) }
          >
            Entrar
          </button>
        </Link>
      </>
    );
  }
}

function mapStateToProps(state) {
  return ({
    email: state.user.email,
    password: state.user.password,
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchEmail: (state) => dispatch(addEmail(state)),
    dispatchPassword: (state) => dispatch(addPassword(state)),
  });
}

Login.propTypes = ({
  email: PropTypes.string,
  password: PropTypes.string,
  dispatchEmail: PropTypes.func,
  dispatchPassword: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
