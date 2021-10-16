import React, { Component } from 'react';
import Input from '../componentsGeneric/Input';
import Select from '../componentsGeneric/Select';

class FormsAddexpense extends Component {
  constructor() {
    super();
    this.state = {
      price: '',
      currency: '',
      tag: '',
      description: '',
    };
    this.handleChangeGeneric = this.handleChangeGeneric.bind(this);
  }

  handleChangeGeneric({target}) {
    const { name, value } = target;
  }

  render() {
    const { price, currency, tag, description } = this.state;
    return (
      <form>
        <Input
          type="number"
          onChange={ this.handleChangeGeneric }
          id="price"
          name="price"
          value={ price }
        />
        <Select
          value={ currency }
          name="currency"
          textLabel="Moeda: "
        />
      </form>

    );
  }
}

export default FormsAddexpense;
