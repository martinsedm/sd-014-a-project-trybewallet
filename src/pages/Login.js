import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getEmailUser as getEmailUserAction } from '../actions';
import ButtonLogin from '../components/ButtonLogin';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  checkLogin() {
    const MIN_CHARACTERES = 5;
    let result = true;
    const { password, email } = this.state;
    if ((password.length > MIN_CHARACTERES)
    && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) { // regex: https://redux-form.com/7.3.0/examples/syncvalidation/
      result = false;
    }
    return result;
  }

  submitLogin() {
    const { history, getEmailUser } = this.props;
    const { email } = this.state;
    getEmailUser(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div>Login</div>
        <section>
          <InputEmail
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <InputPassword
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
          <ButtonLogin
            onClick={ this.submitLogin }
            disabled={ this.checkLogin() }
          />
        </section>
      </>
    );
  }
}

Login.propTypes = {
  getEmailUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmailUser: (email) => dispatch(getEmailUserAction(email)),
});
export default connect(null, mapDispatchToProps)(Login);
