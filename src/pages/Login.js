import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAuthentication, passwordAuthentication } from '../services/authentication';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailAuth: false,
      passwordAuth: false,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { email } = this.state;
    const { history, dispatchEmail } = this.props;
    dispatchEmail(email);
    history.push('/carteira');
  }

  handleAuth({ target: { value, name } }) {
    if (name === 'email') {
      const emailAuth = emailAuthentication(value);
      this.setState({ emailAuth });
    }
    if (name === 'password') {
      const passwordAuth = passwordAuthentication(value);
      this.setState({ passwordAuth });
    }
  }

  render() {
    const { emailAuth, passwordAuth } = this.state;
    const disabled = !(emailAuth && passwordAuth);
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              onChange={ (event) => {
                this.handleChange(event);
                this.handleAuth(event);
              } }
              placeholder="Digite seu e-mail"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              id="password"
              name="password"
              onChange={ this.handleAuth }
              placeholder="Digite sua senha"
            />
          </label>
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatchEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
