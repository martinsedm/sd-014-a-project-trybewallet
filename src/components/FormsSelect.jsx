import React from 'react';

class FormsSelect extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="input-moeda">
          Moeda
          <select id="input-moeda" name="currency">
            <option>0</option>
          </select>
        </label>
        <label htmlFor="input-pagamento">
          Método de pagamento
          <select id="input-pagamento" name="method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-categoria">
          Tag
          <select id="input-categoria" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar Despesa</button>
      </>
    );
  }
}

export default FormsSelect;
