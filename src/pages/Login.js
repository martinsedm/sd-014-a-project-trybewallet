import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    const { email } = this.state;
    const { history, loginDispatch } = this.props;
    loginDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha } = this.state;
    const EMAIL_REGEX = /.+@.+\..+/;
    const SENHA_LENGTH = 6;
    return (
      <form>
        <input
          type="text"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="senha"
          data-testid="password-input"
          value={ senha }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !EMAIL_REGEX.test(email) || senha.length < SENHA_LENGTH }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email) => dispatch(login(email)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
