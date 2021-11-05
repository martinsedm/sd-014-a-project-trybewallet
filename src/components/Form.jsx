import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" name="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" id="descrição" name="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda"> </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" id="categoria">
            <option value="alimentaçao">Alimentação</option>
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
