import React from 'react';
import Input from '../Input';
import Select from '../Select';

const PAYMENT = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const CATEGORY = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpendituresForm extends React.Component {
  constructor() {
    super();
    this.state = {
      valueField: 0,
      currency: '',
      optionsCurr: ['Teste', 'Teste2'],
      payment: 'Dinheiro',
      category: 'Alimentação',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { state } = this;
    const { valueField, currency, optionsCurr, payment, category, description } = state;
    return (
      <form>
        <Input
          type="number"
          onChange={ this.handleChange }
          value={ valueField }
          name="valueField"
          testId="value-input"
          label="Valor"
        />
        <Select
          label="Moeda"
          options={ optionsCurr }
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
          id="currency-input"
        />
        <Select
          label="Método de pagamento"
          options={ PAYMENT }
          name="payment"
          value={ payment }
          onChange={ this.handleChange }
          id="payment-input"
        />
        <Select
          label="Tag"
          options={ CATEGORY }
          name="category"
          value={ category }
          onChange={ this.handleChange }
          id="category-input"
        />
        <Input
          type="text"
          onChange={ this.handleChange }
          value={ description }
          name="description"
          testId="description-input"
          label="Descrição"
        />
      </form>
    );
  }
}

export default ExpendituresForm;
