import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleChange({ target: { name, value } }) {
    this.setState(
      { [name]: value },
      () => {
        const { email } = this.state;
        const isEmailValid = this.validateEmail(email);
        this.setState(
          { isEmailValid },
        );
      },
    );
  }

  handleClick() {
    const { history, setMakeLogin } = this.props;
    const { email } = this.state;

    setMakeLogin(email);

    history.push('/carteira');
  }

  render() {
    const { email, password, isEmailValid } = this.state;
    const MIN_LENGTH = 6;

    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="text"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
          <button
            type="button"
            disabled={ password.length < MIN_LENGTH || !isEmailValid }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setMakeLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setMakeLogin: (email) => dispatch(makeLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
