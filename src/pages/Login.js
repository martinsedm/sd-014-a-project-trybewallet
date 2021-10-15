import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
    this.loginBTNClick = this.loginBTNClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async loginBTNClick() {
    const { history, dispatchUserLogin } = this.props;
    const { email } = this.state;
    this.setState({ loading: true });
    dispatchUserLogin(email);
    history.push('/carteira');
  }

  render() {
    const MIN_USER_INPUT = 6;
    const { email, password, loading } = this.state;
    return (
      <div data-testid="page-login">
        {loading ? <Loading />
          : (
            <form>
              <label htmlFor="email-label">
                E-mail:
                <input
                  data-testid="email-input"
                  value={ email }
                  type="text"
                  name="email"
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="email-label">
                Senha::
                <input
                  data-testid="password-input"
                  value={ password }
                  type="password"
                  name="password"
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                onClick={ this.loginBTNClick }
                data-testid="login-submit-button"
                disabled={
                  (password.length < MIN_USER_INPUT)
                  || (!email.match(/^\S+@\S+\.\S+$/))
                }
              >
                Entrar
              </button>
            </form>
          )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserLogin: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatchUserLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
