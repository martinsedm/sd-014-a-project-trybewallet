import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkInputsData = this.checkInputsData.bind(this);
  }

  checkInputsData() {
    let notAllow = 0;
    const passwordLength = 6;
    const { email, password } = this.state;
    const emailArroba = email.split('@');
    if (password.length >= passwordLength) {
      notAllow += 1;
    }
    if (emailArroba.length === 2 && emailArroba[1].includes('.com')) {
      notAllow += 1;
    }
    if (notAllow === 2) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.checkInputsData());
  }

  render() {
    const { disabled, email, password } = this.state;
    const { saveEmail } = this.props;

    return (
      <form>
        <input
          type="text"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="text"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => saveEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveEmail: (email) => dispatch(userAction(email)),
  };
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
