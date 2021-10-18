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
    };
    this.handleChangeGeneric = this.handleChangeGeneric.bind(this);
  }

  handleChangeGeneric({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const MethodsPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagsExpense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value: price, currency, method: paymentForm, tag, description } = this.state;
    return (
      <form>
        <Input
          type="number"
          onChange={ this.handleChangeGeneric }
          id="value"
          name="value"
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
          name="method"
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
