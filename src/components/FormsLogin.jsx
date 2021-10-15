import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Input from '../componentsGeneric/Input';

export class FormsLogin extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }
  handleChangeCheck = () =>{

  }

  render() {
    return (
      <div />
    );
  }
}

export default FormsLogin;
