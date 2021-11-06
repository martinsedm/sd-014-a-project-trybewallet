import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userEmail as userEmailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Consultei: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  handleValidation() {
    const { email, password } = this.state;
    const validEmail = /\S+@\S+\.\S+/;
    const validPasswordLength = 5;
    if (validEmail.test(email) && password.length >= validPasswordLength) {
      this.setState({
        disableButton: false,
      });
    } else {
      this.setState({
        disableButton: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.handleValidation();
  }

  render() {
    const { email, password, disableButton } = this.state;
    const { UserEmail } = this.props;

    return (
      <main>
        <form>
          <label htmlFor="user-email">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              id="user-email"
              placeholder="Email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="user-password">
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="user-password"
              placeholder="Senha"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ disableButton }
              onClick={ () => UserEmail(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  UserEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  UserEmail: (payload) => dispatch(userEmailAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
