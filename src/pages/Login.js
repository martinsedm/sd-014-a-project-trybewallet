import PropTypes from 'prop-types';
import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.mudar = this.mudar.bind(this);
    this.validarEmail = this.validarEmail.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validarEmail(email) {
    const emailInput = /\S+@\S+\.\S+/;
    return emailInput.test(email);
  }

  mudar(event) {
    this.handleChange(event, () => {
      const { email, password } = this.state;
      const MIN_PASSWORD = 6;
      if (password.length >= MIN_PASSWORD
        && this.validarEmail(email)) this.setState({ disable: false });
      else this.setState({ disable: true });
    });
  }

  handleChange({ target }, callback) {
    const { name, value } = target;
    this.setState({ [name]: value }, callback);
  }

  // https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
  entrar(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <form onSubmit={ this.entrar }>
        <input
          type="email"
          placeholder="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.mudar }
        />
        <input
          type="password"
          placeholder="senha"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.mudar }
        />
        <button type="submit" disabled={ disable } onClick={ this.entrar }>Entrar</button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
