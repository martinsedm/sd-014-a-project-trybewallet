import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    const { user, history } = this.props;
    user(email);
    history.push('/carteira');
  }

  render() {
    const CARACTER_MIN = 6;
    const { email, password } = this.state;
    /** Source: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail */
    const VALIDATE_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return (
      <main>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group col-md-5 offset-md-3">
            <div className="input-group mb-3">
              <input
                className="form-control"
                placeholder="Digite seu email"
                type="text"
                name="email"
                id="email"
                value={ email }
                onChange={ this.handleChange }
                data-testid="email-input"
              />
              <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
          </div>
          <div className="form-group mb-3 col-md-5 offset-md-3">
            <input
              className="form-control"
              placeholder="Digite sua senha"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </div>
          <div className="d-grid gap-2 col-md-5 offset-md-3">
            <button
              className="btn btn-outline-primary"
              type="submit"
              disabled={
                password.length < CARACTER_MIN
              || email.search(VALIDATE_EMAIL) !== 0
              }
            >
              Entrar
            </button>
          </div>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  user: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
