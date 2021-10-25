import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePassoword = this.handlePassoword.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      if (this.validateEmail(value)) {
        this.setState({
          emailValid: true,
        });
      } else {
        this.setState({
          emailValid: false,
        });
      }
    });
  }

  // handleClick(event) {
  //   event.prevent.default();
  //   const { onSubmit, history } = this.props;
  //   const { email } = this.state;
  //   onSubmit(email);
  //   history.push('/carteira');
  // }

  handlePassoword({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const MIN_CHARACTERS = 6;
      if (value.length >= MIN_CHARACTERS) {
        this.setState({
          passwordValid: true,
        });
      } else {
        this.setState({
          passwordValid: false,
        });
      }
    });
  }

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  }

  render() {
    const { email, password, emailValid, passwordValid } = this.state;
    const { onSubmit } = this.props;
    let disabled = false;
    if (!emailValid || !passwordValid) {
      disabled = true;
    }

    return (
      <div>
        <label htmlFor="input-email">
          Email:
          <input
            id="input-email"
            name="email"
            type="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-password">
          Password:
          <input
            id="input-password"
            name="password"
            type="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handlePassoword }
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => onSubmit(email) }
        >
          <Link to="/carteira">
            Entrar
          </Link>
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (state) => dispatch(submitLogin(state)),
});

export default connect(null, mapDispatchToProps)(Login);
