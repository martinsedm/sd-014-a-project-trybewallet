import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      blockSubmit: true, // Bloqueio da submissão para o botão.
      redirect: false,
    };

    this.validateInputs = this.validateInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validateInputs() {
    const { email, password } = this.state;
    const validEmail = /\S+@\S+\.\S+/; // Validação do e-mail com Regex.
    const validPassword = 6;
    if (validEmail.test(email) && password.length >= validPassword) { // .test para saber se é correspondente e retorna um bool.
      this.setState({ blockSubmit: false });
    } else {
      this.setState({ blockSubmit: true });
    }
  }

  // Controlled Components

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validateInputs());
  }

  handleClick() {
    const { auth } = this.props;
    const { email } = this.state;
    auth(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, blockSubmit, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <main>
        <form>
          <input
            name="email"
            type="text"
            placeholder="EMAIL"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            placeholder="SENHA"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ blockSubmit }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  auth: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
