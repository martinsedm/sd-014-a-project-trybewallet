import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            <option>1</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select name="payment-method" id="payment-method">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-debito">Cartão de crédito</option>
            <option value="cartao-de-credito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag:
          <select name="category" id="category">
            <option value="alimentacao">Alimentação</option>
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

export default Form;
