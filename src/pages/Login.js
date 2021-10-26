import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup } from 'reactstrap';
// ref https://www.youtube.com/watch?v=XHPL-rX9m-Q
import { login as loginAction } from '../actions';
import TextInput from '../components/TextInput';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.disableBtn = this.disableBtn.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  disableBtn() {
    const { email, password } = this.state;
    const MIN_LENGTH = 5;

    const disable = !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email)
      && password.length > MIN_LENGTH);
      // ref https://stackoverflow.com/questions/43676695/email-validation-react-native-returning-the-result-as-invalid-for-all-the-e
    return disable;
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    return (
      <Form className="login-form">
        <FormGroup>
          <TextInput
            type="email"
            name="email"
            value={ email }
            htmlFor="email"
            placeholder="Email"
            dataTestId="email-input"
            onChange={ this.handleChange }
          />
        </FormGroup>
        <FormGroup>
          <TextInput
            type="password"
            name="password"
            value={ password }
            htmlFor="password"
            placeholder="Senha"
            dataTestId="password-input"
            onChange={ this.handleChange }
          />
        </FormGroup>
        <Link
          to="/carteira"
          style={ (this.disableBtn()) ? { pointerEvents: 'none' } : null }
          // ref https://newbedev.com/easier-way-to-to-disable-link-in-react
        >
          <Button
            className="loginBtn"
            color="primary"
            type="button"
            disabled={ this.disableBtn() }
            onClick={ () => login({ email }) }
          >
            Entrar
          </Button>
        </Link>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
