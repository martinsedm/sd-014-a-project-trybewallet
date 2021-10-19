import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          {' '}
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="descrição">
          {' '}
          Descrição:
          {' '}
          <input type="text" id="descrição" name="descrição" />
        </label>
        <label htmlFor="moeda">
          {' '}
          Moeda:
          {' '}
          <select id="moeda" name="moeda">
            <option value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          {' '}
          Método de pagamento:
          {' '}
          <select id="pagamento" name="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="débito">Cartão de crédito</option>
            <option value="crédito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          {' '}
          Tag:
          {' '}
          <select id="tag" name="tag">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
