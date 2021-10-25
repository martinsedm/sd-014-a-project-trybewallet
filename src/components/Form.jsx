import React, { Component } from 'react';
import Select from './Select';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      payment: '',
      tag: '',
      currencyList: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencyAPI();
  }

  async fetchCurrencyAPI() {
    const currencyFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyJSON = await currencyFetch.json();
    const currencyKeys = Object.keys(currencyJSON);
    const currencyList = currencyKeys.filter((currency) => currency !== 'USDT');
    this.setState({
      currencyList,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, payment, tag, currencyList } = this.state;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const TAGS = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <Select
          name="currency"
          option={ currencyList }
          onChange={ this.handleChange }
          value={ currency }
          label="Moeda"
        />
        <Select
          name="payment"
          option={ paymentMethods }
          onChange={ this.handleChange }
          value={ payment }
          label="Método de pagamento"
        />
        <Select
          name="tag"
          option={ TAGS }
          onChange={ this.handleChange }
          value={ tag }
          label="Tag"
        />
      </form>
    );
  }
}

export default Form;
