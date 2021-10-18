import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login as loginAction } from '../actions';
import Input from '../components/Input';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.disableBtn = this.disableBtn.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  disableBtn() {
    const { email, password } = this.state;
    const MIN_LENGTH = 5;

    const disable = !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email)
      && password.length > MIN_LENGTH);
      // ref https://stackoverflow.com/questions/43676695/email-validation-react-native-returning-the-result-as-invalid-for-all-the-e
    return disable;
  }

  render() {
    const { email } = this.state;
    const { login } = this.props;
    return (
      <form>
        <Input
          type="email"
          name="email"
          htmlFor="email"
          placeholder="Email"
          dataTestId="email-input"
          onChange={ this.handleChange }
        />
        <Input
          type="password"
          name="password"
          htmlFor="password"
          placeholder="Senha"
          dataTestId="password-input"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.disableBtn() }
            onClick={ () => login({ email }) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
