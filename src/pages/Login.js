import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  // referência https://stackoverflow.com/questions/43676695/email-validation-react-native-returning-the-result-as-invalid-for-all-the-e
  handleDisable() {
    const { email, password } = this.state;
    const MIN_LENGTH = 6;
    const validEmail = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/).test(email);
    if (validEmail && password.length >= MIN_LENGTH) {
      return false;
    }
    return true;
  }

  handleSubmit() {
    const { email } = this.state;
    const { history, setUserLogin } = this.props;
    setUserLogin({ email });
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">
            <input
              type="text"
              value={ email }
              id="email"
              name="email"
              data-testid="email-input"
              placeholder="Email"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              value={ password }
              id="password"
              name="password"
              data-testid="password-input"
              placeholder="Senha"
              onChange={ this.handleChange }
              required
            />
          </label>
          <button type="submit" disabled={ this.handleDisable() }>Entrar</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  setUserLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUserLogin: (value) => dispatch(getUserLogin(value)),
});

export default connect(null, mapDispatchToProps)(Login);
