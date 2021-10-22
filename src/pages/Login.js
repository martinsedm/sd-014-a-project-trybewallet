import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loginDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.saveAndChange = this.saveAndChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.isDisabled();
  }

  // CÓDIGO FEITO PARA VALIDAÇÃO DO EMAIL
  // Referência ao StackOverFlow
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // TROCA O ESTADO DE ACORDO COM O IF, VALIDA O EMAIL E SENHA
  isDisabled() {
    const NUMBER_MAXCHAR = 5;
    const { email, password } = this.state;
    const checkChar = password.length >= NUMBER_MAXCHAR;
    const booleanEmail = this.validateEmail(email);
    if (booleanEmail && checkChar) {
      this.setState({
        loginDisabled: false,
      });
    } else {
      this.setState({
        loginDisabled: true,
      });
    }
  }

  saveAndChange() {
    const { loginUser, history } = this.props;
    const { email } = this.state;
    loginUser(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, loginDisabled } = this.state;
    return (
      <div className="Login">
        <section className="login-inputs">
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            placeholder="Senha"
            data-testid="password-input"
          />
        </section>
        <div>
          <button
            type="button"
            disabled={ loginDisabled }
            onClick={ this.saveAndChange }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(addUser(data)),
});

export default connect(null, mapDispatchToProps)(Login);
