import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { notifyLoginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabledBtn: true,
      logged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      const { password } = this.state;
      const disabledBtn = !document.loginForm.checkValidity() || (password !== '123456');
      this.setState({
        disabledBtn,
      });
    });
  }

  handleClick() {
    const { email, password } = this.state;
    const { notifyLogin } = this.props;
    console.log(email, password);
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
        <form name="loginForm">
          <fieldset>
            <legend>Faça seu login</legend>
            <label htmlFor="email-input">
              Email:
              <input
                type="email"
                name="email"
                id="email-input"
                data-testid="email-input"
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
                value={ password }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              disabled={ disabledBtn }
              onClick={ this.handleClick }
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
