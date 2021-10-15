import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      coin: '',
      payment: 'Dinheiro',
      tag: 'Alimentação',
      coinOption: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCoinAPI();
  }

  async fetchCoinAPI() {
    const coinFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coinJSON = await coinFetch.json();
    const coinKeys = Object.keys(coinJSON);
    const coinOption = coinKeys.filter((coin) => coin !== 'USDT');
    this.setState({
      coinOption,
    });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, coin, payment, tag, coinOption } = this.state;
    const optionsCard = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const optionTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          name="value"
          value={ value }
          onChange={ this.handleChange }
          type="number"
        >
          Valor
        </Input>
        <Input
          name="description"
          value={ description }
          onChange={ this.handleChange }
          type="text"
        >
          Descrição
        </Input>
        <Select
          name="coin"
          option={ coinOption }
          onChange={ this.handleChange }
          value={ coin }
        >
          Moeda
        </Select>
        <Select
          name="payment"
          option={ optionsCard }
          onChange={ this.handleChange }
          value={ payment }
        >
          Método de pagamento
        </Select>
        <Select
          name="tag"
          option={ optionTag }
          onChange={ this.handleChange }
          value={ tag }
        >
          Tag
        </Select>
      </form>
    );
  }
}
