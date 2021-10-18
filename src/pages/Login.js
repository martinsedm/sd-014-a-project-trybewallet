import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick(event, user) {
    event.preventDefault();
    const { loginDispatch, history } = this.props;
    loginDispatch(user);
    history.push('/carteira');
  }

  isValidEmail(email) { return email.match(/.+@.+\..+/); }

  isValidLogin() {
    const MIN_CARACTERS_PASSWORD = 6;
    const { email, password } = this.state;
    return password.length >= MIN_CARACTERS_PASSWORD && this.isValidEmail(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <h1>Trybe Wallet</h1>
        <form
          onSubmit={ (event) => this.handleClick(event, { email, password }) }
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <input
            type="submit"
            value="Entrar"
            disabled={ !this.isValidLogin() }
          />
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (user) => dispatch(loginUser(user)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
