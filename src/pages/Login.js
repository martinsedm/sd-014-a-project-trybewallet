import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {

  }

  render() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const { userEmail } = this.props;

    return (
      <div>
        <input
          type="email"
          value={ email }
          name="email"
          data-testid="email-input"
          placeholder="Digite seu email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          value={ password }
          name="password"
          data-testid="password-input"
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={
              (!email.includes('@' && '.com') || (password.length < minPasswordLength))
            }
            onClick={ () => (userEmail(email)) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => (
    dispatch(saveEmail(email))),
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
