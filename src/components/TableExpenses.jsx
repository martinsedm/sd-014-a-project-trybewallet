import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenseAction, totalExpenseAction } from '../actions';

class TableExpenses extends React.Component {
  formatDelete({ target }) {
    const { expenses, deleteExpense, changeTotal } = this.props;
    let newState = [];
    expenses.forEach((expense) => {
      if (+expense.id !== +target.id) {
        newState.push(expense);
      }
    });
    deleteExpense(newState);
    let total = 0;
    newState.forEach((expense) => {
      const { exchangeRates, value, currency } = expense;
      total += parseFloat(value) * exchangeRates[currency].ask;
    });
    //  console.log(total.toFixed(2));
    changeTotal(total.toFixed(2));
  }

  renderExpenses() {
    const { expenses } = this.props;
    return expenses.map((expense) => {
      const { description, tag, method, value, currency, exchangeRates, id } = expense;
      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ exchangeRates[currency].name.split('/')[0] }</td>
          <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
          <td>{ (exchangeRates[currency].ask * value).toFixed(2) }</td>
          <td>Real</td>
          <td>
            <button
              id={ id }
              data-testid="delete-btn"
              onClick={ (e) => this.formatDelete(e) }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
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
          { expenses.length >= 1 && this.renderExpenses() }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteExpense: (data) => dispatch(deleteExpenseAction(data)),
    changeTotal: (data) => dispatch(totalExpenseAction(data)),
  };
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

TableExpenses.defaultProps = {
  expenses: [{}],
};

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
