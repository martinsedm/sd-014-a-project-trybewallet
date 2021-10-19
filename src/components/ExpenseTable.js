import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';
import {
  deleteExpense as delExpense,
  editExpense as edExpense,
} from '../actions';

class ExpenseTable extends React.Component {
  renderButton(name, expense, callback) {
    return (
      <button
        type="button"
        data-testid={ `${name}-btn` }
        onClick={ () => callback(expense) }
        className={ `${name}-btn expense-opt-btn` }
      >
        { name === 'edit' ? <RiEditLine /> : <RiDeleteBinLine /> }
      </button>
    );
  }

  render() {
    const { expenses, deleteExpense, editExpense } = this.props;
    return (
      <table className="table-wallet">
        <thead>
          <tr>
            <th>Moeda</th>
            <th>Valor</th>
            <th>Câmbio utilizado</th>
            <th>Moeda de conversão</th>
            <th>Valor convertido</th>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => {
            const { description, tag, method, value, currency, exchangeRates } = expense;
            const { name, ask } = exchangeRates[currency];
            return (
              <tr key={ index }>
                <td>{name}</td>
                <td>{value}</td>
                <td>{parseFloat(ask).toFixed(2)}</td>
                <td>Real</td>
                <td>{(ask * parseInt(value, 10)).toFixed(2)}</td>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>
                  {this.renderButton('edit', expense, editExpense)}
                  {this.renderButton('delete', expense, deleteExpense)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(delExpense(expense)),
  editExpense: (expense) => dispatch(edExpense(expense)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

ExpenseTable.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
