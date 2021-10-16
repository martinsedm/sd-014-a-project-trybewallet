import React, { Component } from 'react';
import PropTypes from 'prop-types';
import headerTableTexts from '../dataText';
import LineTable from './LineTable';

export default class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          {headerTableTexts.map(((item) => <th key={ item }>{item}</th>))}
        </tr>
        {expenses.map((expense) => <LineTable expense={ expense } key={ expense.id } />) }
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.string,
    currency: PropTypes.string,
    paymentForm: PropTypes.string,
    method: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};
