import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" name="value" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" name="descrição" id="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda">
            <option>Selecione</option>
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento
          <select name="método de pagamento" id="método de pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option name="lazer" value="lazer">Lazer</option>
            <option name="transporte" value="transporte">Transporte</option>
            <option name="trabalho" value="trabalho">Trabalho</option>
            <option name="saúde" value="saúde">Saúde</option>
            <option name="alimentação" value="alimentação">Alimentação</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
