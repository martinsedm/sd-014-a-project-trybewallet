import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { salvarEmail as salvarEmailAction, fetchApiMoedas as fetchApiMoedasThunk } from '../actions';

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

  componentDidMount() {
    const { fetchApiMoedas } = console.log( this.props);
    fetchApiMoedas();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatchSalvarEmail, history } = this.props;
    const { email } = this.state;
    dispatchSalvarEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const caracterMinimo = 6;
    const validacaoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; /* Dica Mateus Souza */

    return (
      <form>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Password
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ password.length < caracterMinimo
             || email.search(validacaoEmail) !== 0 }
        >
          Entrar
        </button>
      </form>

    );
  }
}

Login.propTypes = {
  dispatchSalvarEmail: PropTypes.func.isRequired,
  fetchApiMoedas: PropTypes.arrayOf.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSalvarEmail: (email) => dispatch(salvarEmailAction(email)),
  fetchApiMoedas: (moeda) => dispatch(fetchApiMoedasThunk(moeda)),
});

export default connect(null, mapDispatchToProps)(Login);
