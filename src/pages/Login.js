import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabledButton: true,
      logged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // https://github.com/tryber/sd-014-a-project-trybewallet/blob/b555871f432b40d0521b656556c26b19c6395c70/src/pages/Login.js
  // https://stackoverflow.com/questions/43676695/email-validation-react-native-returning-the-result-as-invalid-for-all-the-e
  // Tirei como base o repositorio do Thiago e o stackoverflow para realizar a validação do email e senha.

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const MINIMO_PASS = 5;
      const disabledButton = !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email)
      && password.length > MINIMO_PASS);
      this.setState({
        disabledButton,
      });
    });
  }

  handleClick() {
    const { email } = this.state;
    const { login } = this.props;
    login({ email });
    this.setState({
      logged: true,
    });
  }

  render() {
    const { email, password, disabledButton, logged } = this.state;

    if (logged) return (<Redirect to="/carteira" />);

    return (
      <div name="loginForm" id="login-form">
        Faça seu login
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            placeholder="senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </div>
        <button
          type="button"
          disabled={ disabledButton }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(loginAction(payload)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
