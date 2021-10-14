import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEmailValue } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  clickSubmit() {
    const { email } = this.state;
    const { dispatchSet, history } = this.props;
    dispatchSet(email);
    history.push('/carteira');
  }

  // Função genérica para salvar o que é digitado no input dentro do estado
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const MAXLENGTH = 6;
    const validateEmail = /\S+@\S+\.\S+/.test(email);
    // https://backefront.com.br/validacao-email-javascript/
    return (
      <fieldset>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <button
          type="submit"
          disabled={ !validateEmail || password.length < MAXLENGTH }
          onClick={ this.clickSubmit }
        >
          Entrar
        </button>
      </fieldset>

    );
  }
}

Login.propTypes = {
  dispatchSet: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSet: (email) => dispatch(setEmailValue(email)),
}
);
export default connect(null, mapDispatchToProps)(Login);
