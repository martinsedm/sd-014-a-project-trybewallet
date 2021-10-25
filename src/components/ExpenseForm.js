import React, { Component } from 'react';
import SelectCurrency from './selectCurrency';

export default class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <h1>adicione nova despesa</h1>
        <label htmlFor="expenseValue">
          valor:
          <input type="number" name="expenseValue" id="expenseValue" />
        </label>

        <label htmlFor="description">
          descrição:
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          moeda:
          <select id="currency">
            <SelectCurrency />
          </select>
        </label>

        <label htmlFor="payment-method">
          método de pagamento:
          <select id="payment-method">
            <option value="dinheiro">dinheiro</option>
            <option value="cartao">cartão de crédito</option>
            <option value="debito">cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          tag
          <select id="tag">
            <option value="alimentação">alimentação</option>
            <option value="lazer">lazer</option>
            <option value="trabalho">trabalho</option>
            <option value="transporte">transporte</option>
            <option value="saude">saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
