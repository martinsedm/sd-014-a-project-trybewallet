import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import formValidation from '../service/formValidation';
import { addUser } from '../actions/index';
// import { Redirect } from 'react-router';
import Input from './Input';
import { Button } from './Button';

export class FormsLogin extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: {
        isValid: false,
        value: '',
      },
      password: {
        isValid: false,
        value: '',
      },
      disabledButton: false,
    };
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
    this.checkAllFormIsValid = this.checkAllFormIsValid.bind(this);
  }

  componentDidUpdate() {
    this.checkAllFormIsValid(this.state);
  }

  checkAllFormIsValid(state) {
    const listState = Object.keys(state).filter((key) => key !== 'disabledButton');
    const result = listState.every((form) => state[form].isValid === true);
    this.setState({
      disabledButton: result,
    });
  }

  handleChangeCheck({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: {
        isValid: formValidation(name, value),
        value,
      },
    });
  }

  render() {
    const { email, password, disabledButton } = this.state;
    return (
      <form>
        <Input
          type="text"
          onChange={ this.handleChangeCheck }
          value={ email.value }
          id="email"
          name="email"
          TextLabel="Email: "
          testId="email-input"
        />
        <Input
          type="password"
          id="password"
          onChange={ this.handleChangeCheck }
          value={ password.value }
          name="password"
          TextLabel="Password: "
          testId="password-input"
        />
        <Button
          disabled={ !disabledButton }
          onClick
          text="Entrar"
        />
        {// {login && <Redirect to="/carteira" />}
        }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (payload) => dispatch(addUser(payload)),
});

export default connect(null, mapDispatchToProps)(FormsLogin);
