import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actionLoginEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      validData: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    },
    () => {
      this.enableButton();
    });
  }

  enableButton() {
    const { email, password } = this.state;
    const MINIMUM_CHARACTERS = 6;
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);
    const validPassword = password.length >= MINIMUM_CHARACTERS;
    if (validEmail && validPassword) {
      this.setState({
        validData: true,
      });
    }
  }

  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  // https://qastack.com.br/programming/5342375/regex-email-validation

  handleClick() {
    const { email } = this.state;
    const { loginInfo } = this.props;
    loginInfo(email);
  }

  render() {
    const { email, password, validData } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              name="email"
              id="email"
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              name="password"
              id="password"
              value={ password }
            />
          </label>
          <button
            type="button"
            disabled={ !validData }
            onClick={ this.handleClick }
          >
            <Link to="/carteira">Entrar</Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginInfo: (payload) => dispatch(actionLoginEmail(payload)),
});

Login.propTypes = {
  loginInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
