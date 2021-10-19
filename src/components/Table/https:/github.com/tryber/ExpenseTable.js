import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.handleExpenses = this.handleExpenses.bind(this);
  }

  handleExpenses() {
    const NUMBER_AMOUNT = 2;
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      return (
        expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>
              {expense.currency}
            </td>
            <td>
              {expense.value}
            </td>
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
            {/* {/* <td>{expense.}</td> */}
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
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
