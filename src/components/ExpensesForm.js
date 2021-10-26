import React from 'react';

import { getCurrencies, mapCurrency } from '../helper';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  async componentDidMount() {
    const currencies = await getCurrencies();
    this.updateState({ currencies });
  }

  updateState(state) {
    this.setState(state);
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            { mapCurrency(currencies) }
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select id="paymentMethod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Categoria
          <select id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Trabalho</option>
          </select>
        </label>
      </div>
    );
  }
}

export default ExpensesForm;
