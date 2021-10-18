import React, { Component } from 'react';

export default class WalletForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="descricao"
            id="descricao"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            {/* Moedas */}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
