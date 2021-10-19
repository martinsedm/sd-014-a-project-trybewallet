import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpensesAction, expensesRemoveAction } from '../../actions';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.handleExpenses = this.handleExpenses.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handleClickRemove(event) {
    event.preventDefault();
    const { expensesAtt, expenses } = this.props;
    const { target } = event;
    /** Source:https://pt.stackoverflow.com/questions/449562/como-fa%C3%A7o-para-clicar-em-um-bot%C3%A3o-e-remover-a-linha-da-tabela-via-javascript */
    const { id } = target.closest('tr');
    const remove = expenses.filter((expense) => expense.id !== Number(id));

    expensesAtt(remove);
  }

  handleClickEdit(event) {
    event.preventDefault();
    const { expensesEdit } = this.props;
    const { target } = event;
    const { id } = target.closest('tr');
    expensesEdit(true, Number(id));
  }

  handleExpenses() {
    const NUMBER_AMOUNT = 2;
    const { expenses } = this.props;
    if (expenses !== undefined) {
      return (
        expenses
          .map(({ id, description, tag, method, value, exchangeRates, currency }) => (
            <tr id={ id } key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(NUMBER_AMOUNT)}</td>
              <td>
                {(Number(exchangeRates[currency].ask)
                * value).toFixed(NUMBER_AMOUNT)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="submit"
                  onClick={ this.handleClickRemove }
                  data-testid="delete-btn"
                >
                  exluir
                </button>
                <button
                  type="submit"
                  onClick={ this.handleClickEdit }
                  data-testid="edit-btn"
                >
                  editar
                </button>
              </td>
            </tr>
          ))
      );
    }
  }

  render() {
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
          {this.handleExpenses()}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expensesAtt: PropTypes.func.isRequired,
  expensesEdit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expensesAtt: (state) => dispatch(expensesRemoveAction(state)),
  expensesEdit: (condition, id) => dispatch(editExpensesAction(condition, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
