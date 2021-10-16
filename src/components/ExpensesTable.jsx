import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense as deleteExpense } from '../actions';

class ExpensesTable extends React.Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <table>
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
        </thead>
        <tbody>
          { expenses.map(
            ({ id, value, description, currency, method, tag, exchangeRates }) => (
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
                    onClick={ () => removeExpense(id) }
                  >
                    <span role="img" aria-label="Excluir">&#x274C;</span>
                  </button>
                </td>
              </tr>
            ),
          ) }
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    expenses: state.wallet.expenses,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    removeExpense: (id) => dispatch(deleteExpense(id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
