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
    const MethodsPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagsExpense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value: price, currency, method: paymentForm, tag, description } = this.state;
    return (
      <form>
        <Input // possivel problema na logica, o valor será tipo string inicialmente.
          type="number"
          onChange={ this.handleChangeGeneric }
          id="price"
          name="price"
          value={ price }
          TextLabel="Valor"
        />
        <Select
          value={ currency }
          options={ [] }
          name="currency"
          textLabel="Moeda"
          onChange={ this.handleChangeGeneric }
        />
        <Select
          value={ paymentForm }
          name="payment"
          textLabel="Método de pagamento"
          onChange={ this.handleChangeGeneric }
          options={ MethodsPayment }
        />
        <Select
          value={ tag }
          name="tag"
          options={ tagsExpense }
          textLabel="Tag"
          onChange={ this.handleChangeGeneric }
        />
        <Input
          type="text"
          id="description"
          value={ description }
          name="description"
          onChange={ this.handleChangeGeneric }
          TextLabel="Descrição"
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
