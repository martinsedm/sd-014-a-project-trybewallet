import React from 'react';
import './Form.css';

const Form = () => (
  <form>
    <label htmlFor="value-field">
      Valor:
      <input id="value-field" type="number" />
    </label>

    <label htmlFor="description-field">
      Descrição:
      <input id="description-field" type="text" />
    </label>

    <label htmlFor="currency">
      Moeda:
      <select id="currency">
        <option aria-label="currency-option" />
      </select>
    </label>

    <label htmlFor="payment-field">
      Método de pagamento:
      <select id="payment-field">
        <option value="dinheiro">Dinheiro</option>
        <option value="credito">Cartão de crédito</option>
        <option value="debito">Cartão de débito</option>
      </select>
    </label>

    <label htmlFor="tag-field">
      Tag:
      <select id="tag-field">
        <option value="alimentacao">Alimentação</option>
        <option value="lazer">Lazer</option>
        <option value="trabalho">Trabalho</option>
        <option value="transporte">Transporte</option>
        <option value="saude">Saúde</option>
      </select>
    </label>
  </form>
);

export default Form;
