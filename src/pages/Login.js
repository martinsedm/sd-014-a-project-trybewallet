import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { emailValidation, passwordValidation } from '../services/index';
import { login } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  formValidation = (email, password) => {
    if (emailValidation(email) && passwordValidation(password)) {
      return false;
    }
    return true;
  }

  handleLogin = () => {
    const { email } = this.state;
    const { confirmLogin, history } = this.props;
    confirmLogin(email);
    history.push('/carteira');
  }

  handleInput = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <main>
        <LoginForm
          handleLogin={ this.handleLogin }
          handleInput={ this.handleInput }
          email={ email }
          password={ password }
          disabled={ this.formValidation(email, password) }
        />
      </main>
    );
  }
}

Login.propTypes = {
  confirmLogin: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToState = (dispatch) => ({
  confirmLogin: (email) => { dispatch(login(email)); },
});

export default connect(null, mapDispatchToState)(Login);
