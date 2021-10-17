import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableBody extends Component {
  render() {
    const { expenses, removeExpense, editExpense, disableBtn } = this.props;
    return (
      <tbody>
        { expenses
          .map(({ id, description, tag, method, value, currency, exchangeRates }) => {
            let { name: currencyName } = exchangeRates[currency];
            const index = currencyName.indexOf('/');
            if (index > 0) {
              currencyName = currencyName.slice(0, index);
            }
            const askValue = Number(exchangeRates[currency].ask).toFixed(2);
            const convertedValue = (Math
              .round(100 * exchangeRates[currency].ask * (value)) / 100).toFixed(2);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ currencyName }</td>
                <td>{ askValue }</td>
                <td>{ convertedValue }</td>
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
              </tr>
            );
          }) }
      </tbody>
    );
  }
}

TableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  disableBtn: PropTypes.bool.isRequired,
};

export default TableBody;
