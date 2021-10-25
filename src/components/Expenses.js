import React from 'react';

class Expenses extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            <option> Chamada à API </option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag:
          <select name="categoria" id="categoria">
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

export default Expenses;
