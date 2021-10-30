import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const MINCODE = 6;
    const emailValid = /\S+@\S+\.\S+/;
    // Referencia: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    return (
      <>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="EMAIL"
        />

        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="PASSWORD"
        />

        <button
          type="submit"
          disabled={ password.length < MINCODE || email.search(emailValid) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </>);
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Login);
