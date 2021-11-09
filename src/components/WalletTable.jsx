import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense as removeExpenseAction } from '../actions';
import DeleteExpense from './DeleteExpense';

const tableInfo = ['Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

class WalletTable extends Component {
  constructor() {
    super();
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick({ target: { id } }) {
    const { expenseInfo, removeExpense } = this.props;
    const updatedExpenses = expenseInfo.filter((expense) => (expense.id) !== Number(id));
    removeExpense(updatedExpenses);
  }

  render() {
    const { expenseInfo } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableInfo.map((tableHeader) => (
              <th key={ tableHeader }>{tableHeader}</th>))}
          </tr>
        </thead>
        <tbody>
          {expenseInfo.map(
            ({ id, tag, method, value, currency, description, exchangeRates }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{(exchangeRates[currency].name).split('/')[0]}</td>
                <td>{Math.ceil(exchangeRates[currency].ask * 100) / 100 }</td>
                <td>{Math.ceil(exchangeRates[currency].ask * value * 100) / 100}</td>
                <td>Real</td>
                <td>
                  <DeleteExpense
                    idBtn={ id }
                    handleClick={ this.handleRemoveClick }
                    text="Apagar"
                    testId="delete-btn"
                  />

                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expensesList) => dispatch(removeExpenseAction(expensesList)),
});

WalletTable.propTypes = {
  expenseInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
