import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions/userAction';

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
      [name]: value });
  }

  handleClick() {
    const { email } = this.state;
    const { getEmail } = this.props;
    getEmail(email);
  }

  render() {
    const { email, password } = this.state;
    const numberMinCaracteres = '6';
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
    return (
      <fieldset>
        <label htmlFor="login">
          <input
            id="login"
            data-testid="email-input"
            type="text"
            onChange={ this.handleChange }
            name="email"
            value={ email }
            placeholder="Digite seu email"
            required
          />
          <input
            id="login"
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
            name="password"
            value={ password }
            placeholder="Digite sua senha"
            required
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !emailRegex.test(email)
                 || password.length < numberMinCaracteres }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </Link>
        </label>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (user) => dispatch(userAction(user)),
});

Login.propTypes = ({
  getEmail: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);
