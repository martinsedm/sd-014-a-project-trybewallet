import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validPasswordLength: false,
      validEmail: false,
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const REG_EX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    const PASSWORD_MIN_LENGTH = 4;
    const { email, password } = this.state;
    this.setState({
      [name]: value,
      validPasswordLength: password.length > PASSWORD_MIN_LENGTH,
      validEmail: REG_EX_EMAIL.test(email),
    });
  }

  handleClick() {
    const { email } = this.state;
    const { regUser } = this.props;
    this.setState({ redirect: true });
    regUser(email);
  }

  render() {
    const { redirect, email, password, validPasswordLength, validEmail } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
            name="email"
            value={ email }
            placeholder="Email"
          />
          <input
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
            name="password"
            value={ password }
            placeholder="Password"
          />
          <button
            type="button"
            disabled={ !(validPasswordLength && validEmail) }
            onClick={ this.handleClick }
          >
            {' '}
            Entrar
            {' '}
          </button>
        </form>
        { redirect && <Redirect to="/carteira" /> }
      </div>
    );
  }
}

// export default Login;
const mapStateToProps = (state) => ({
  loginStatus: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  regUser: (payload) => dispatch(saveEmail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  regUser: PropTypes.func.isRequired,
};
