import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class FormWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestJson = await request.json();
    console.log(requestJson);
    const currencyArray = Object.keys(requestJson);
    const currencyArrayWithoutUSDT = currencyArray
      .filter((currency) => currency !== 'USDT' && currency !== 'DOGE');

    console.log(currencyArrayWithoutUSDT);
    this.setState({
      currencies: currencyArrayWithoutUSDT,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            { currencies.map((option, i) => (
              <option key={ i }>{ option }</option>
            )) }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
