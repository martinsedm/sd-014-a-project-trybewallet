import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enable: false,
    };
    this.enableForm = this.enableForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  enableForm() {
    const { email, password } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordLength = 6;
    const enable = emailRegex.test(email) && password.length >= passwordLength;
    this.setState({ enable });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.enableForm());
  }

  submitForm(event) {
    const { email } = this.state;
    const { history, setEmailGlobal } = this.props;
    event.preventDefault();
    setEmailGlobal(email);
    history.push('/carteira');
  }

  render() {
    const { enable } = this.state;
    return (
      <form onSubmit={ this.submitForm }>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          name="password"
          type="password"
          onChange={ this.handleChange }
        />
        <input
          type="submit"
          value="Entrar"
          disabled={ !enable }
        />
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
