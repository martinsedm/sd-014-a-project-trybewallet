import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import SelectForm from './SelectForm';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const objJSON = await fetch(url);
    const result = await objJSON.json();
    const currencies = Object.keys(result).filter((key) => key !== 'USDT');
    this.setState({ currencies });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const paymentMethods = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];
    const { currencies } = this.state;
    return (
      <div>
        <form>
          <InputForm
            type='text'
            name='value'
            label='Valor'
            onChange={this.handleChange}
          />
          <InputForm
            type='text'
            name='description'
            label='Descrição:'
            onChange={this.handleChange}
          />
          <SelectForm
            label='Moeda'
            name='currency'
            options={currencies}
            onChange={this.handleChange}
          />
          <SelectForm
            label='Método de pagamento'
            name='payment-method'
            options={paymentMethods}
            onChange={this.handleChange}
          />
          <SelectForm
            label='Tag'
            name='category'
            options={tag}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default WalletForm;
