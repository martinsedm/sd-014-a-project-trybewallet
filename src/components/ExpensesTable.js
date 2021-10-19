import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends Component {
  ask(expense) {
    const { ask } = expense.exchangeRates[expense.currency];
    return parseFloat(ask).toFixed(2);
  }

  currencyName(expense) {
    const { name } = expense.exchangeRates[expense.currency];
    const getOnlyCurrencyName = name.split('/');
    return getOnlyCurrencyName[0];
  }

  convertedExpense(expense) {
    const { ask } = expense.exchangeRates[expense.currency];
    return parseFloat(expense.value * ask).toFixed(2);
  }

  render() {
    const { expenses } = this.props;
    return (
      <>
        { expenses.map((expense) => (
          <tr key={ expense }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{this.ask(expense)}</td>
            <td>{this.currencyName(expense)}</td>
            <td>{this.convertedExpense(expense)}</td>
            <td>Real</td>
          </tr>
        )) }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
