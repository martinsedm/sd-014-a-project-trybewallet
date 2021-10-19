import React from 'react';
import Input from './Input';
import Select from './Select';
import { tagOptions, paymentOptions } from '../data';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: '',
      payment: '',
      tag: '',
      description: '',
      value: 0.00,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, payment, tag } = this.state;
    return (
      <form>
        <Input
          id="value"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        >
          Valor:
        </Input>
        <Input
          id="description"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        >
          Descrição:
        </Input>
        <Select
          name="currency"
          options={ [] }
          onChange={ this.handleChange }
          value={ currency }
        >
          Moeda:
        </Select>
        <Select
          name="payment"
          options={ paymentOptions }
          onChange={ this.handleChange }
          value={ payment }
        >
          Método de pagamento:
        </Select>
        <Select
          name="tag"
          options={ tagOptions }
          onChange={ this.handleChange }
          value={ tag }
        >
          Tag:
        </Select>
      </form>
    );
  }
}

export default Form;
