import React, { Component } from 'react';
import PropTypes from 'prop-types';

// https://github.com/tryber/sd-014-a-project-trybewallet/pull/5/commits/6a6c83b6edebf9459db17bd63852920322a98412
// Ref. acima
class Table extends Component {
  render() {
    const { expenses, removeExpense, editExpense } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { expenses
          .map(({ id, description, tag, method, value, currency, exchangeRates }) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name }</td>
              <td>{ Math.round(100 * exchangeRates[currency].ask) / 100 }</td>
              <td>{ Math.round(100 * exchangeRates[currency].ask * value) / 100}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  onClick={ () => editExpense(id) }
                >
                  Edit
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => removeExpense(id) }
                >
                  x
                </button>
              </td>
            </tr>)) }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default Table;
