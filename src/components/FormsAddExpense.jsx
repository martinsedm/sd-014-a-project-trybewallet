import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import { Button } from './Button';

class FormsAddexpense extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      // devarar ter a lista de moedas resultado da api
    };
    this.handleChangeGeneric = this.handleChangeGeneric.bind(this);
  }

  handleChangeGeneric() {
    // const { name, value } = target;
    console.log('mudando o state');
  }

  render() {
    const { value: price, currency, method: paymentForm, tag, description } = this.state;
    return (
      <form>
        <Input // possivel problema na logica, o valor será tipo string inicialmente.
          type="number"
          onChange={ this.handleChangeGeneric }
          id="price"
          name="price"
          value={ price }
          TextLabel="Valor: "
        />
        <Select
          value={ currency }
          name="currency"
          textLabel="Moeda: "
          onChange={ this.handleChangeGeneric }
        />
        <Select
          value={ paymentForm }
          name="payment"
          textLabel="Forma de pagamento: "
          onChange={ this.handleChangeGeneric }
        />
        <Select
          value={ tag }
          name="tag"
          textLabel="Tag: "
          onChange={ this.handleChangeGeneric }
        />
        <Select
          value={ description }
          name="description"
          textLabel="Descrição"
          onChange={ this.handleChangeGeneric }
        />
        <Button
          onClick={ this.handleonCLick }
          text="Adicionar despesa"
        />
      </form>

    );
  }
}

export default FormsAddexpense;
