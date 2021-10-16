import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="input-valor">
          Valor
          <input id="input-valor" type="number" name="valor" />
        </label>
        <label htmlFor="input-descricao">
          Descrição
          <input id="input-descricao" type="text" name="descricao" />
        </label>
        <label htmlFor="input-moeda">
          Moeda
          <select name="input-moeda" id="input-moeda">
            <option>ok</option>
          </select>
        </label>
        <label htmlFor="input-payment">
          Método de pagamento
          <select name="input-payment" id="input-payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select name="input-tag" id="input-tag">
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

export default Form;
