import React from 'react';

class FormExpense extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            label="Valor"
          />
        </label>
        <label htmlFor="cambio">
          Moeda:
          <select
            id="cambio"
            name="cambio"
            label="Moeda"
          >
            Options
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            label="Método de pagamento"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select
            label="Tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>TRabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormExpense;
