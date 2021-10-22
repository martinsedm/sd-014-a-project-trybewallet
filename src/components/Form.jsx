import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" name="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value="deleteme">deleteme</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
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
