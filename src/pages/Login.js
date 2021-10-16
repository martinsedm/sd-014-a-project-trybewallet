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
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin() {
    const { history, getEmailUser } = this.props;
    getEmailUser(this.state);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email } = this.state;
    return (
      <>
        <div> Login  </div>
        <section>
          <InputEmail
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <InputPassword />
          <ButtonLogin
            onClick={ this.submitLogin }
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
