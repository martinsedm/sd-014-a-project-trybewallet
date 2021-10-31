import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUserEmail } from '../actions';
import LoginInput from '../components/LoginInput';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { login, history } = this.props;
    const { email } = this.state;
    login(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  isDisabled() {
    const { email, password } = this.state;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Reference: https://emailregex.com/
    const MIN_LENGTH = 6;
    return !regex.test(email) || password.length < MIN_LENGTH;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <LoginInput
            name="email"
            onChange={ this.handleChange }
            placeholder="Email"
            type="email"
            value={ email }
          />
          <LoginInput
            name="password"
            onChange={ this.handleChange }
            placeholder="Senha"
            type="password"
            value={ password }
          />

          <button
            disabled={ this.isDisabled() }
            onClick={ this.onSubmit }
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(setUserEmail(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
