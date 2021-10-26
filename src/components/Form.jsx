import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USA',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value});
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            value={ value }
            id="value"
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" value={ description } id="description" onChange={ this.handleChange }/>
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" value={ currency } id="currency" onChange={ this.handleChange }>
            API
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" value={ method } id="method" onChange={ this.handleChange }>
            <option id="cash">Dinheiro</option>
            <option id="credit-card">Cartão de crédito</option>
            <option id="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } id="tag" onChange={ this.handleChange }>
            <option id="food">Alimentação</option>
            <option id="leisure">Lazer</option>
            <option id="work">Trabalho</option>
            <option id="transport">Transporte</option>
            <option id="health">Saúde</option>
          </select>
        </label>
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default Form;
