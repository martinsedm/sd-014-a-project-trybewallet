import React from 'react';

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="expenses">
          Valor
          <input
            type="number"
            name="expenses"
            placeholder="Despesas"
            id="expenses"
          />
        </label>
        <label htmlFor="expenses-description">
          Descrição
          <input
            type="text"
            name="expenses-description"
            placeholder="Descrição de Despesas"
            id="expenses-description"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value="Mock">Mock</option>
            <option value="Mack">Mack</option>
          </select>
        </label>
        <label htmlFor="pay-method">
          Método de pagamento
          <select name="pay-method" id="pay-method">
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debt-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
