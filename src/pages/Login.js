import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import guardaEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  routeChange() {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    const path = '/carteira';
    history.push(path);
  }

  render() {
    const { email, password } = this.state;
    const MAX_LEN = 6;
    return (
      <div>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={
            !email
            || !password
            || email.split('.').includes('com') === false
            || (password.length >= MAX_LEN) === false
          }
          onClick={ this.routeChange }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(guardaEmail(value)),
});

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
