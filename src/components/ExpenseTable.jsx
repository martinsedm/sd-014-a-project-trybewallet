import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions/index';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.onClickBtnDel = this.onClickBtnDel.bind(this);
  }

  onClickBtnDel({ target: { id } }) {
    const { rmvExpense, expenses } = this.props;
    rmvExpense(expenses.find((expense) => expense.id === Number(id)));
  }

  getExpensesCells() {
    const { expenses } = this.props;
    return (
      expenses.map(({ id, value, description, currency, method, tag, exchangeRates }) => (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>{Math.round(exchangeRates[currency].ask * 100) / 100}</td>
          <td>
            {Math.round((value * exchangeRates[currency].ask) * 100) / 100}
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              id={ id }
              onClick={ this.onClickBtnEdit }
              data-testid="edit-btn"
            >
              Editar
            </button>
            <button
              type="button"
              id={ id }
              onClick={ this.onClickBtnDel }
              data-testid="delete-btn"
            >
              Remover
            </button>
          </td>
        </tr>
      ))
    );
  }

  render() {
    return (
      <main>
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
            { this.getExpensesCells() }
          </tbody>
        </table>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
    edit: state.wallet.edit,
  };
}

const mapDispatchToProps = (dispatch) => ({
  rmvExpense: (payload) => dispatch(removeExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  rmvExpense: PropTypes.func.isRequired,
};
