import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { email } = this.state;
    const { callback } = this.props;
    this.setState({ redirect: true });
    callback(email);
  }

  render() {
    const { email, password, redirect } = this.state;
    const MIN_CHARACTER = 6;
    const R = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    // Expressão regular para validação de e-mail do usuario Zignd no stackoverflow
    const checkLogin = (password.length >= MIN_CHARACTER && R.test(email));

    if (redirect) return (<Redirect to="/carteira" />);

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
          disabled={ !checkLogin }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

/* const mapStateToProps = (state) => ({
loginEmail: state.user.email,
  }); */

const mapDispatchToProps = (dispatch) => (
  {
    callback: (payload) => dispatch(saveEmail(payload)),
  }
);

Login.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
