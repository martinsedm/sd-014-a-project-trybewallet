import PropTypes from 'prop-types';
import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passwordInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleSubmit() {
    console.log('Um nome foi enviado:');
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, passwordInput } = this.state;
    const senhaMin = 6;
    return (
      <>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              type="password"
              name="passwordInput"
              value={ passwordInput }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="submit"
            disabled={ passwordInput.length < senhaMin }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default Login;
