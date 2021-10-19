import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableBody extends Component {
  setCurrencies(rates, currency, value) {
    const { exchange } = this.props;
    let { name: currencyName } = rates[currency];
    const index1 = currencyName.indexOf('/');
    currencyName = index1 > 0 ? currencyName.slice(0, index1) : currencyName;
    let exchangeName = 'Real';
    let askValue = Number(rates[currency].ask);
    if (exchange !== 'BRL') {
      exchangeName = rates[exchange].name;
      const index2 = exchangeName.indexOf('/');
      exchangeName = index2 > 0 ? exchangeName.slice(0, index2) : exchangeName;
      askValue /= Number(rates[exchange].ask);
    }
    const convertedValue = (Math
      .round(100 * askValue * (value)) / 100);
    return {
      currencyName, exchangeName, askValue, convertedValue,
    };
  }

  render() {
    const { expenses, removeExpense, editExpense, disableBtn } = this.props;
    return (
      <tbody>
        { expenses
          .map(({ id, description, tag, method, value, currency, exchangeRates }) => {
            const { currencyName, exchangeName, askValue, convertedValue,
            } = this.setCurrencies(exchangeRates, currency, value);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ currencyName }</td>
                <td>{ askValue.toFixed(2) }</td>
                <td>{ convertedValue.toFixed(2) }</td>
                <td>{ exchangeName }</td>
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
  exchange: PropTypes.string.isRequired,
};

export default TableBody;
