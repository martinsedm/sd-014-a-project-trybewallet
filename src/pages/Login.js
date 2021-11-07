import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getEmail as getEmailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      button: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
    this.checkLogin();
  }

  checkLogin() {
    const regex = /\S+@\S+\.\S+/;
    const PASSWORD_LENGHT = 4;
    const { email, password } = this.state;
    if (regex.test(email) && password.length > PASSWORD_LENGHT) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
  }

  saveEmail() {
    const { email } = this.state;
    const { getEmail, history } = this.props;

    getEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          required
          placeholder="E-mail"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Senha"
          required
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          disabled={ button }
          onClick={ this.saveEmail }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(getEmailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
