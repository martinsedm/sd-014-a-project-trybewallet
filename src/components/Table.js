import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense as editExpenseAction,
  removeExpense as removeExpenseAction } from '../actions';
import TableButton from './TableButton';

const tableHeaders = ['Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

class Table extends Component {
  constructor() {
    super();
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleRemoveClick({ target: { id } }) {
    const { expenseInfo, removeExpense } = this.props;
    const updatedExpenses = expenseInfo.filter((expense) => (expense.id) !== Number(id));
    removeExpense(updatedExpenses);
  }

  handleEditClick({ target: { id } }) {
    const { expenseInfo, editExpense } = this.props;
    const expenseToEdit = expenseInfo.filter((expense) => (expense.id) === Number(id));
    editExpense(expenseToEdit);
  }

  render() {
    const { expenseInfo } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((tableHeader) => (
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
                  <TableButton
                    idBtn={ id }
                    handleClick={ this.handleEditClick }
                    text="Editar"
                    testId="edit-btn"
                  />

                </td>
                <td>
                  <TableButton
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

Table.propTypes = {
  editExpense: PropTypes.func.isRequired,
  expenseInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenseInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expensesList) => dispatch(removeExpenseAction(expensesList)),
  editExpense: (expense) => dispatch(editExpenseAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
