import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userEmailAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      password: '',
      validateEmail: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail(userEmail) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(userEmail).toLowerCase());
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    }, () => {
      const { userEmail } = this.state;
      const enableEmail = this.validateEmail(userEmail);
      this.setState({ validateEmail: enableEmail });
    });
  }

  handleClick() {
    const { userEmailDispatchAction } = this.props;
    const { userEmail } = this.state;
    userEmailDispatchAction(userEmail);
  }

  render() {
    const { userEmail, password, validateEmail } = this.state;
    const MIN_PASSWORD_CHARACTERS = 6;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="userEmail"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ userEmail }
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <Link
          to="/carteira"
        >
          <button
            type="button"
            disabled={ !(password.length >= MIN_PASSWORD_CHARACTERS && validateEmail) }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmailDispatchAction: (email) => (
    dispatch(userEmailAction(email))
  ),
});

Login.propTypes = {
  userEmailDispatchAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
