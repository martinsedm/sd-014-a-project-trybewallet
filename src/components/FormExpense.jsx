import React from 'react';

class FormExpense extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input type="number" name="Valor" id="Valor" />
        </label>

        <label htmlFor="Descrição">
          Descrição:
          <input type="text" name="Descrição" id="Descrição" />
        </label>

        <label htmlFor="Moeda">
          Moeda:
          <select name="Moeda" id="Moeda">
            <option value="Moeda">USD</option>
          </select>
        </label>

        <label htmlFor="Pagamento">
          Método de pagamento:
          <select name="Pagamento" id="Pagamento">
            <option value="">Dinheiro</option>
            <option value="">Cartão de crédito</option>
            <option value="">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="Tag">
          Tag:
          <select name="Tag" id="Tag">
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

export default FormExpense;
