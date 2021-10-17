import React from 'react';
import fetchCurrency from './CurrencyQuery';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.currencyMapper = this.currencyMapper.bind(this);
    this.currencyToState = this.currencyToState.bind(this);
  }

  componentDidMount() {
    this.currencyToState();
    this.currencyMapper();
  }

  async currencyToState() {
    const currencyList = Object.values(await fetchCurrency());
    const currCodes = currencyList.map((elem) => (elem.code));
    this.setState({
      currencies: currCodes,
    });
  }

  currencyMapper() {
    const { currencies } = this.state;
    const currToOptions = currencies.map((curr) => (
      <option key={ curr.code }>
        {curr}
      </option>
    ));

    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          {currToOptions}
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="expenses">
          Valor
          <input
            type="number"
            name="expenses"
            placeholder="Despesas"
            id="expenses"
          />
        </label>
        <label htmlFor="expenses-description">
          Descrição
          <input
            type="text"
            name="expenses-description"
            placeholder="Descrição de Despesas"
            id="expenses-description"
          />
        </label>
        <br />
        <this.currencyMapper />
        <label htmlFor="pay-method">
          Método de pagamento
          <select name="pay-method" id="pay-method">
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debt-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
