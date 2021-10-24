import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { actionUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { history, emailReducer } = this.props;
    const { email } = this.state;
    emailReducer(email);
    history.push('./carteira');
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  validateEmail(email) {
    const emailLower = email.toLowerCase();
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailRegex.test(emailLower);
  }

  render() {
    const { email, password } = this.state;
    const MIN = 6;

    return (
      <div>
        Login:

        <div />
        <Input
          id="email"
          nomeLabel="Email:"
          valueId={ email }
          onChangeInput={ this.handleChange }
        />
        <Input
          id="password"
          nomeLabel="Password:"
          valueId={ password }
          onChangeInput={ this.handleChange }
        />

        <button
          type="button"
          disabled={ password.length < MIN || !this.validateEmail(email) }
          onClick={ this.handleSubmit }
        >
          Entrar

        </button>

      </div>);
  }
}

const mapDispachToProps = (dispatch) => ({
  emailReducer: (email) => dispatch(actionUser(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  emailReducer: PropTypes.func.isRequired,
};

export default connect(null, mapDispachToProps)(Login);
