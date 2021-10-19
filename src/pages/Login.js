import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      validation: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.handleValidation());
  }

  handleValidation() {
    const MIN_LENGTH = 6;
    const { email, senha } = this.state;
    const validation = !(/\w+@\w+.com/.test(email) && senha.length >= MIN_LENGTH);
    this.setState({ validation });
  }

  handleClick() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, senha, validation } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ validation }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  validEmail: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}.isRequired;

export default Login;
