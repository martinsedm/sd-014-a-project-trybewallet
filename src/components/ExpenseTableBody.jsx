import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { connect } from 'react-redux';
import { removeExpense as removeExpenseAction /* totalCost as totalCostAction */ }
  from '../actions';
// import handleTotalState from '../helpers';

class ExpenseTableBody extends Component {
  constructor() {
    super();
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    // this.handleTotal = this.handleTotal.bind(this);
  }

  async handleDeleteButton({ target: { value } }) {
    const { removeExpense } = this.props;
    await removeExpense(value);
    // this.handleTotal();
  }

  // handleTotal() {
  //   const { totalCost, expenses } = this.props;
  //   handleTotalState(totalCost, expenses);
  // }

  render() {
    const { expenses } = this.props;

    return (
      <tbody>
        { expenses.length > 0 && expenses.map((expense) => {
          const expenseCurrency = expense.currency;
          return (
            <tr key={ expense.id } id={ `tr-${expense.id}` }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expenseCurrency].name }</td>
              <td>
                {Math.round(expense.exchangeRates[expenseCurrency].ask * 100) / 100}
              </td>
              <td>
                {
                  Math.round(expense
                    .exchangeRates[expenseCurrency].ask * expense.value * 100) / 100
                }
              </td>
              <td>Real</td>
              <td>
                <AiFillEdit />
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ this.handleDeleteButton }
                  value={ expense.id }
                >
                  Excluir
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

ExpenseTableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (index) => dispatch(removeExpenseAction(index)),
  // totalCost: (total) => (dispatch(totalCostAction(total))),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTableBody);
