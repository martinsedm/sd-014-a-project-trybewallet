import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveLogin as saveLoginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      redirect: false,
    };
    this.handleChance = this.handleChance.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  // atualiza estado local
  handleChance({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    const { email, senha } = this.state;
    const caracteres = 5;
    if (email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
      && senha.length >= caracteres) {
      document.getElementById('submit').disabled = false;
    }
  }

  buttonClick(event) {
    event.preventDefault();
    const { email } = this.state;
    const { saveLogin } = this.props;
    saveLogin(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, senha, redirect } = this.state;
    if (redirect === true) return (<Redirect to="/carteira" />);
    return (
      <form htmlFor="form" onSubmit={ this.buttonClick }>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            onChange={ this.handleChance }
            value={ email }
            name="email"
          />
        </label>
        <label htmlFor="senha">
          <input
            data-testid="password-input"
            onChange={ this.handleChance }
            value={ senha }
            name="senha"
            type="password"
          />
        </label>
        <button
          id="submit"
          disabled
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  saveLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispach) => ({
  saveLogin: (email) => dispach(saveLoginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
