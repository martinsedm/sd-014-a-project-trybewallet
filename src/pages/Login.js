import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.validLogin = this.validLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  // como validar um email, ideia obtida de https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validLogin() {
    const { password, email } = this.state;
    const qutidadeMin = 6;
    const validEmail = email.match(/\S+@\S+\.\S+/);
    return password.length >= qutidadeMin && validEmail;
  }

  render() {
    const { email, password } = this.state;
    const { setUserLogin, history } = this.props;
    return (
      <>
        <h1>Trybe Wallet</h1>
        <form>
          <input
            data-testid="email-input"
            name="email"
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            placeholder="Senha"
            type="password"
            value={ password }
            onChange={ this.handleChange }
            name="password"
          />
        </form>
        <button
          onClick={ () => {
            setUserLogin(this.state);
            history.push('/carteira');
          } }
          type="button"
          disabled={ !this.validLogin() }
        >
          Entrar
        </button>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setUserLogin: (payload) => dispatch(userLogin(payload)),
});

Login.propTypes = {
  setUserLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
