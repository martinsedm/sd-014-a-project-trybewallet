import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expensesRemoveAction } from '../../../../../actions';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.handleExpenses = this.handleExpenses.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { expensesAtt, expenses } = this.props;
    const { target } = event;
    /** Source:https://pt.stackoverflow.com/questions/449562/como-fa%C3%A7o-para-clicar-em-um-bot%C3%A3o-e-remover-a-linha-da-tabela-via-javascript */
    const { id } = target.closest('tr');
    const remove = expenses.filter((expense) => expense.id !== Number(id));

    expensesAtt(remove);
  }

  handleExpenses() {
    const NUMBER_AMOUNT = 2;
    const { expenses } = this.props;
    if (expenses !== undefined) {
      return (
        expenses.map((expense) => (
          <tr id={ expense.id } key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>
              {
                Object.values(expense.exchangeRates)
                  .find((exchangeRate) => exchangeRate.code === expense.currency)
                  .name.split('/')[0]
              }
            </td>
            <td>
              {
                Number(Object.values(expense.exchangeRates)
                  .find((exchangeRate) => exchangeRate.code === expense.currency).ask)
                  .toFixed(NUMBER_AMOUNT)
              }
            </td>
            <td>
              {(Number(Object.values(expense.exchangeRates)
                .find((exchangeRate) => exchangeRate.code === expense.currency).ask)
                * Number(expense.value)).toFixed(NUMBER_AMOUNT)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="submit"
                onClick={ this.handleClick }
                data-testid="delete-btn"
              >
                exluir
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
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expensesAtt: (state) => dispatch(expensesRemoveAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
