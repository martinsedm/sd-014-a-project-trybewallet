import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { logUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e, user) {
    e.preventDefault();
    const { history, dispatchSetValue } = this.props;
    history.push('/carteira');
    dispatchSetValue(user);
  }

  render() {
    const { email, password } = this.state;
    const senhaMin = 6;
    const re = /\S+@\S+\.\S+/;
    return (
      <>
        <div>Login</div>
        <form onSubmit={ (e) => this.handleSubmit(e, { email, password }) }>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
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
            HTMLForm="submit"
            type="submit"
            disabled={ re.test(email) === false || password.length < senhaMin }

          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchProps = (dispatch) => ({
  dispatchSetValue: (valueLog) => dispatch(logUser(valueLog)),
});

const mapStateToProps = (state) => ({ user: state.user.email });

export default connect(mapStateToProps, mapDispatchProps)(Login);
