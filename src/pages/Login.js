import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionLoginEmail } from '../actions';

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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { login } = this.state;
    const { history, loginEmail } = this.props;
    loginEmail(login);
    history.push('/carteira');
  }

  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  // https://qastack.com.br/programming/5342375/regex-email-validation

  render() {
    const { email, password } = this.state;
    const reg = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    const MAX_LENGTH = 6;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              name="email"
              id="email"
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              name="password"
              id="password"
              value={ password }
            />
          </label>
          <button
            type="button"
            disabled={ !reg.test(email) || password.length < MAX_LENGTH }
            onClick={ this.handleClick }
          >

            <Link to="/carteira">Entrar</Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginEmail: (payload) => dispatch(actionLoginEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func,
  }).isRequired,
  loginEmail: PropTypes.func.isRequired,
};
