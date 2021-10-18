import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor :
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="Moeda">
          Moeda :
          <select id="Moeda">
            <option value="">select</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento">
            <option value="">Dinheiro</option>
            <option value="">Cartão de crédito</option>
            <option value="">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag :
          <select id="Tag">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>
        <label htmlFor="Descrição">
          Descrição :
          <input type="text" name="Descrição" id="Descrição" />
        </label>
      </form>
    );
  }
}
