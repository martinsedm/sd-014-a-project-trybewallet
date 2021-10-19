import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <h2>Formulário para adicionar nova despesa</h2>
        <label htmlFor="expense-value">
          Valor
          <input type="number" name="expense-value" id="expense-value" />
        </label>
        <br />
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            <option value="valor1">Valor 1</option>
          </select>
        </label>
        <br />
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao">Cartão de Cŕedito</option>
            <option value="debito">Débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="dinheiro">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
