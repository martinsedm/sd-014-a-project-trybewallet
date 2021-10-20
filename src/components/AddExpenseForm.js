import React, { Component } from 'react';
import fetchApi from '../services/api';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    fetchApi().then((response) => {
      const currencies = Object.keys(response).filter(
        (currency) => currency !== 'USDT',
      );
      this.setState({ currencies });
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <h1>Cadastro de despesas</h1>
        <form>
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
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>
                  {currency}
                </option>
              ))}
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
            Tag
            <select id="category">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

export default AddExpenseForm;
