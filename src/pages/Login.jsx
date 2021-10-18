import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { email } = this.state;
    const { registerUser } = this.props;
    this.setState({ redirect: true });
    registerUser(email);
  }

  render() {
    const { email, password, redirect } = this.state;
    const MIN_CHARACTER = 6;
    // dica de regex com Pedro Alles T13 & https://regex101.com/library/jZ2cC4
    // R DE REGEX (CULPA DO LINT)
    const R = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <form>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ password.length < MIN_CHARACTER || !R.test(email) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => (
  {
    registerUser: (payload) => dispatch(saveEmail(payload)),
  }
);

Login.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
