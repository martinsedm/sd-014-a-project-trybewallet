import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/loading';
import { logUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    this.setState({ loading: true });
    dispatchSetValue(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, loading } = this.state;
    const senhaMin = 6;
    const re = /\S+@\S+\.\S+/;
    return (
      <div data-testid="page-login">
        {loading ? <Loading />
          : (
            <form>
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={ email }
                  onChange={ this.handleChange }
                  data-testid="email-input"
                  required={ /\S+@\S+\.\S+/ }
                />
              </label>
              <label htmlFor="password">
                Senha:
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={ password }
                  onChange={ this.handleChange }
                  data-testid="password-input"
                  required
                />
              </label>
              <button
                type="button"
                onClick={ this.handleSubmit }
                data-testid="login-submit-button"
                disabled={ (!email.match(re)) || password.length < senhaMin }
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
  dispatchSetValue: (email) => dispatch(logUser(email)),
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
