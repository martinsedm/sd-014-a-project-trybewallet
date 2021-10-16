import React from 'react';

class WalletForm extends React.Component {
  renderFields() {
    return (
      <fieldset>

        <label htmlFor="expense-value">
          Valor
          <input
            type="text"
            id="expense-value"
          />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input
            type="text"
            id="expense-description"
          />
        </label>
        <label htmlFor="expense-currency">
          Moeda
          <select
            type="text"
            id="expense-currency"
          >
            {/* Colocar algumas <option></option>s aqui */}
          </select>
        </label>
      </fieldset>
    );
  }

  renderSelects() {
    return (
      <fieldset>
        <label htmlFor="expense-payment">
          Método de pagamento
          <select
            type="text"
            id="expense-payment"
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select
            type="text"
            id="expense-tag"
          >
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="travel">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }

  render() {
    return (
      <form>
        { this.renderFields() }
        { this.renderSelects() }
      </form>
    );
  }
}

export default WalletForm;
