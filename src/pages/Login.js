import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Input from '../components/Input';
import { loginAction } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      send: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    this.verifyFilds();
  }

  verifyFilds() {
    const { email, password } = this.state;
    const NUMBER_MAX_PASSWORD = 5;
    const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (re.test(email) && password.length > NUMBER_MAX_PASSWORD) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password, send } = this.state;
    const { logAction } = this.props;
    if (send) return <Redirect to="/carteira" />;
    return (
      <div>
        <Input
          name="email"
          value={ email }
          type="email"
          onChange={ this.handleChange }
        >
          Email
        </Input>
        <Input
          name="password"
          value={ password }
          type="password"
          onChange={ this.handleChange }
        >
          Senha
        </Input>
        <button
          type="button"
          disabled={ this.verifyFilds() }
          onClick={ () => {
            logAction(email);
            this.setState({
              send: true,
            });
          } }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logAction: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  logAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
