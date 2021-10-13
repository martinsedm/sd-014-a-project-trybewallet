import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isEnable: false,
    };
    this.formValidator = this.formValidator.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  formValidator() {
    const { email, password } = this.state;
    const passwdLength = 6;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const isEnable = regex.test(email) && password.length >= passwdLength;
    this.setState({ isEnable });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.formValidator());
  }

  submitForm(event) {
    const { email } = this.state;
    const { history, setEmailGlobal } = this.props;
    event.preventDefault();
    setEmailGlobal(email);
    history.push('/carteira');
  }

  render() {
    const { isEnable } = this.state;
    return (
      <form onSubmit={ this.submitForm }>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <input type="submit" value="Entrar" disabled={ !isEnable } />
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  setEmailGlobal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmailGlobal: (email) => dispatch(setUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
