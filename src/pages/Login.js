import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { notifyLoginAction } from '../actions';

const MIN_LENGTH_PASSWORD = 6;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      logged: false,
      disabledBtn: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const formLogin = document.getElementById('login-form');
    this.setState({
      [name]: value,
    },
    () => {
      const { password } = this.state;
      this.setState({
        disabledBtn: (!formLogin.checkValidity()
         || password.length < MIN_LENGTH_PASSWORD),
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { notifyLogin } = this.props;
    notifyLogin({ email, password });
    this.setState({
      logged: true,
    });
  }

  render() {
    const { email, password, disabledBtn, logged } = this.state;
    if (logged) return (<Redirect to="/carteira" />);
    return (
      <section>
        <form name="loginForm" id="login-form" onSubmit={ this.handleSubmit }>
          <fieldset>
            <legend>Faça seu login</legend>
            <label htmlFor="email-input">
              Email:
              <input
                type="email"
                name="email"
                id="email-input"
                data-testid="email-input"
                required
                autoComplete="on"
                placeholder="seu@email.com"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password-input">
              Senha:
              <input
                type="password"
                name="password"
                id="password-input"
                data-testid="password-input"
                minLength={ MIN_LENGTH_PASSWORD }
                required
                autoComplete="on"
                placeholder="mínimo de 6 caracteres"
                value={ password }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="submit"
              disabled={ disabledBtn }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  notifyLogin: (user) => dispatch(notifyLoginAction(user)),
});

Login.propTypes = {
  notifyLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
