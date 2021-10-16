import React, { Component } from 'react';
import fetchData from '../helpers/fetch';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      currency: '',
      method: '',
      tag: '',
      description: '',
      data: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetchData().then((data) => this.setState({ data }));
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick() {
    console.log('click');
  }

  render() {
    const { value, currency, method, tag, description, data } = this.state;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="text"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { Object.values(data).map((currency, i) => {
              if (currency.codein !== 'BRLT' && currency.code !== 'DOGE') {
                return (
                  <option key={ i }>{currency.code}</option>
                );
              }
            })}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" value={ method } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default Form;
