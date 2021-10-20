import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class ExpensesTable extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

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

  handleClick({ target: { id } }) {
    const { deleteExpenseFromStore } = this.props;
    deleteExpenseFromStore(Number(id));
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
            <button
              id={ expense.id }
              type="button"
              data-testid="delete-btn"
              onClick={ this.handleClick }
            >
              Deletar
            </button>
          </tr>
        )) }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseFromStore: (value) => dispatch(deleteExpense(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExpenseFromStore: PropTypes.func.isRequired,
};
