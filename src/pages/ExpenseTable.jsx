import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  showExpenses() {
    const { getExpenses, removeExpense } = this.props;
    const showExpenses = getExpenses.map((expense) => (
      <tr key={ expense.id }>
        <td> - </td>
        <td>{ expense.description }</td>
        <td>{ expense.tag }</td>
        <td>{ expense.method }</td>
        <td>{ expense.value }</td>
        <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
        <td>
          { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
        </td>
        <td>
          { parseFloat(expense.value
          * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
        </td>
        <td>Real</td>

        <td>
          <button type="button">Editar</button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => removeExpense(expense.id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    ));
    return showExpenses;
  }

  render() {
    return (
      <div>
        <h1>Expense Table</h1>
        <table>
          <thead>
            <tr>
              <th>Data</th>
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
          </thead>
          <tbody>
            { this.showExpenses() }
          </tbody>
        </table>
      </div>
    );
  }
}

ExpenseTable.propTypes = {
  getExpenses: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    removeExpense: (data) => dispatch(deleteExpense(data)),
  };
}

function mapStateToProps(state) {
  return {
    getExpenses: state.wallet.expenses,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
