import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { userLogged } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
      logged: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailAndPassowordValidation.bind(this);
    this.saveUserEmail = this.saveUserEmail.bind(this);
  }

  emailAndPassowordValidation() {
    const PASSWORD_LENGTH = 5;
    const { email, password } = this.state;
    // Regex utilizada foi retirada de https://stackoverflow.com/questions/53377994/email-validation-in-reactjs-is-not-working-properly
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (emailRegex.test(email) && password.length >= PASSWORD_LENGTH) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.emailAndPassowordValidation();
  }

  saveUserEmail(event) {
    event.preventDefault();
    const { setUserEmail } = this.props;
    const { email } = this.state;
    setUserEmail(email);
    this.setState({ logged: true });
  }

  render() {
    const { disabled, email, password, logged } = this.state;
    if (logged) return <Redirect to="/carteira" />;
    return (
      <div>
        <form onSubmit={ this.saveUserEmail }>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </div>
          <br />
          <button
            type="submit"
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (email) => dispatch(userLogged(email)),
});

Login.propTypes = ({
  setUserEmail: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);
