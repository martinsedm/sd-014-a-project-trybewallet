import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHead from './TableHead';

class Table extends Component {
  render() {
    const { expenses, removeExpense, editExpense, disableBtn } = this.props;
    return (
      <table>
        <TableHead />
        <tbody>
          { expenses
            .map(({ id, description, tag, method, value, currency, exchangeRates }) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ Math.round(100 * exchangeRates[currency].ask * (value)) / 100 }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    disabled={ disableBtn }
                    onClick={ () => editExpense(id) }
                  >
                    Edite
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    disabled={ disableBtn }
                    onClick={ () => removeExpense(id) }
                  >
                    x
                  </button>
                </td>
              </tr>)) }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  disableBtn: PropTypes.bool.isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default Table;
