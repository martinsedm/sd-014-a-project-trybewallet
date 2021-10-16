import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import validator from 'validator';
import loginEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    /*
    Se eu usace onChange={ this.handleChange } nos inputs, seria necessario o uso do bind, como eu usei callback no onclick entao não foi necessario o bind

    this.handleChange = this.handleChange.bind(this);
    */

    this.validateEmailPassword = this.validateEmailPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validateEmailPassword() {
    const { email, password } = this.state;
    const MIN_CHARACTERES_PASSWORD = 5;
    const passwordValidate = password.length >= MIN_CHARACTERES_PASSWORD;
    const emailValidate = validator.isEmail(email); // usei uma biblioteca

    // Outra forma de validar sem a biblioteca que instalei
    // fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    //  const testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);

    if (emailValidate && passwordValidate) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    // console.log(name, value);
    this.setState({ [name]: value });

    this.validateEmailPassword();
  }

  handleClick() {
    const { email } = this.state;
    const { setEmail, history } = this.props;
    console.log(history);
    setEmail(email);
    history.push('/carteira'); // Ao inves de usar o link, usei o history
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            data-testid="email-input"
            placeholder="E-mail"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            data-testid="password-input"
            placeholder="password"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        {/* <Link to="/carteira"> */}
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
        {/* </Link> */}
      </form>
    );
  }
}

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(loginEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
