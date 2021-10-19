import React, { Component } from 'react';
import OptionsTags from './OptionsTags';
import PayOptions from './PayOptions';
import CurrenciesOptions from './CurrenciesOptions';

export default class Form extends Component {
  render() {
    const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="Valor" id="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <textarea name="descricao" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            <CurrenciesOptions />
          </select>
        </label>

        <label htmlFor="método de pagamento">
          Método de pagamento:
          <select id="método de pagamento">
            <PayOptions payMethods={ payMethods } />
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <OptionsTags tags={ tags } />
          </select>
        </label>
      </form>
    );
  }
}
