import React from 'react';

class addDesp extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="Valor" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input type="text" name="Descrição" id="descrição" />
        </label>
        <label htmlFor=" moeda">
          Moeda:
          <select type="text" name="Moeda" id="moeda">
            <option>a</option>
          </select>
        </label>
        <label htmlFor="mpagamento">
          Método de pagamento:
          <select type="text" name="mpagamento" id="mpagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesa">
          despesa:
          <select type="text" name="despesa" id="despesa">
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

export default addDesp;
