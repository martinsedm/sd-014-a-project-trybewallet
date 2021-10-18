import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class FormWallet extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            <option value="">Options</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
