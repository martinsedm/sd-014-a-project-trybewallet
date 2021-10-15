import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="number" name="expense" id="expense" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="coins">
          Moeda:
          <select name="coins" id="coins">Coins</select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento:
          <select name="payment" id="payment">
            Payment:
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenseTag">
          Método de Pagamento:
          <select name="expenseTag" id="expenseTag">
            Tag:
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseForm;
