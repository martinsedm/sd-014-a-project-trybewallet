import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteExpenseAction } from '../actions';

import '../css/table.css';

class TableExpenses extends React.Component {
  render() {
    const { expenses, deleteExpense } = this.props;

    return (
      <table className="expenses-table">
        <thead>
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
          <tbody>
            { expenses.map(
              ({ id, description, tag, method, value, currency, exchangeRates }) => (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                  <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
                  <td>
                    { (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2) }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => deleteExpense(id) }
                    >
                      <h5>Apagar</h5>
                    </button>
                  </td>
                </tr>
              ),
            ) }
          </tbody>
        </thead>
      </table>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    expenses: state.wallet.expenses,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    deleteExpense: (id) => dispatch(deleteExpenseAction(id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
