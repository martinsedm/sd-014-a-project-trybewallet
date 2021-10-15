import React from 'react';

class ExpenditureForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            placeholder="Valor"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
          />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            <option>Default</option>
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select name="paymentMethod" id="paymentMethod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
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

export default ExpenditureForm;
