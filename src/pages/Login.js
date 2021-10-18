import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      button: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleButton() {
    const { email, password } = this.state;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinLentgh = 5;
    if (checkEmail.test(email) && password.length >= passwordMinLentgh) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.handleButton();
  }

  render() {
    const { email, password, button } = this.state;
    const { dispatchEmail } = this.props;
    return (
      <section>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="E-mail"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            value={ password }
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ button }
            onClick={ () => dispatchEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
