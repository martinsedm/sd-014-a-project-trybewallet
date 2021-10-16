import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router';
import Input from './Input';
import { Button } from './Button';

export class FormsLogin extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }

  handleChangeCheck() {
    // const { name, value } = target;
    // faça verificação do email
  }

  render() {
    const { email } = this.state;
    return (
      <form>
        <Input
          type="text"
          onChange={ this.handleChangeCheck }
          id="email"
          name="email"
          value={ email }
          TextLabel="Email: "
        />
        <Input
          type="password"
          id="password"
          name="email"
          value={ email }
          TextLabel="Passaword: "
        />
        <Button text="Entrar" />
        {// {login && <Redirect to="/carteira" />}
        }
      </form>
    );
  }
}

export default FormsLogin;
