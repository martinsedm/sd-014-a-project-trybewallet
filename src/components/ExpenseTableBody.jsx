import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { connect } from 'react-redux';

class ExpenseTableBody extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        { expenses && expenses.map((expense) => {
          const expenseCurrency = expense.currency;
          return (
            <tr key={ expense.id }>
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
                <button type="button">
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
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTableBody);
