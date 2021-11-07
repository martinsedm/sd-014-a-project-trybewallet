import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="inputValue">
          valor
          <input type="number" id="inputValue" />
        </label>
        <label htmlFor="moeda">
          moeda
          <select id="moeda">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit_card">Cartão de crédito</option>
            <option value="debit_card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" id="describe" />
        </label>
      </form>
    );
  }
}

export default Forms;
