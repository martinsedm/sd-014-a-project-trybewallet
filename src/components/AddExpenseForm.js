import React from 'react';

export default function AddExpenseForm() {
  return (
    <div>
      <h1>Cadastro de despesas</h1>
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            <option>Real</option>
            <option>Dolar</option>
            <option>Euro</option>
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select id="paymentMethod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    </div>
  );
}
