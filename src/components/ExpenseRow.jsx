import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EditButton from './EditButton';
import RemoveButton from './RemoveButton';

class ExpenseRow extends Component {
  render() {
    const { expenseData } = this.props;
    const { value, currency, method, tag, description, exchangeRates } = expenseData;
    const { name, ask } = exchangeRates[currency];

    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{(1 * ask).toFixed(2)}</td>
        <td>{name.split('/')[0]}</td>
        <td>{(value * ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <EditButton />
          <RemoveButton />
        </td>
      </tr>
    );
  }
}

ExpenseRow.propTypes = {
  expenseData: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    exchangeRates: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExpenseRow;
