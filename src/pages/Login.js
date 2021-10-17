import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserValue } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { dispatch } = this.props;
    const { email } = this.state;
    dispatch(email);
    this.setState({ redirect: true });
  }

  render() {
  // https://stackoverflow.com/questions/5342375/regex-email-validation//
    const minPasswordLength = 6;
    const { email, password, redirect } = this.state;
    const emailSyntaxRegex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/i;
    const validateEmail = emailSyntaxRegex.test(email);
    if (redirect) return <Redirect to="/carteira" />;

    return (
      <form>
        email:
        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        senha:
        <input
          name="password"
          type="number"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !(password.length >= minPasswordLength && validateEmail)}
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchPayload: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch: (payload) => dispatch(setUserValue(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
