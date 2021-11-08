import React, { Component } from 'react';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',

    };
    this.handleInput = this.handleInput.bind(this);
    this.makePayMethods = this.makePayMethods.bind(this);
    this.makeExpenseTags = this.makeExpenseTags.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  makePayMethods() {
    const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return payMethods.map((method, index) => (
      <option key={ index } value={ method }>{method}</option>
    ));
  }

  makeExpenseTags() {
    const expenseTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return expenseTags.map((tag, index) => (
      <option key={ index } value={ tag }>{ tag }</option>
    ));
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="input-value">
            Valor
            <input
              name="value"
              type="text"
              value={ value }
              onChange={ this.handleInput }
              id="input-value"
            />
          </label>
          <label htmlFor="description-value">
            Descrição
            <input
              name="description"
              type="text"
              value={ description }
              onChange={ this.handleInput }
              id="description-value"
            />
          </label>
          <label htmlFor="input-moeda">
            <select id="input-moeda">
              <option value="teste">vazio</option>
            </select>
          </label>
          <label htmlFor="input-metodo">
            <select id="input-metodo">
              { this.makePayMethods() }
            </select>
          </label>
          <label htmlFor="expense-tag">
            <select id="expense-tag">
              { this.makeExpenseTags() }
            </select>
          </label>

          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
