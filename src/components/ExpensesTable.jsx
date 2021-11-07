import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeExpense as removeExpenseAction } from '../actions';

// Consultei: https://blog.betrybe.com/html/table-html/
// Consultei: https://blog.betrybe.com/javascript/javascript-split/
// Consultei: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
// Consultei: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { expenses, removeExpense } = this.props;
    const newExpense = expenses.filter((expense) => expense.id !== id);
    removeExpense(newExpense);
  }

  render() {
    const { expenses } = this.props;

    return (
      <section>
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
            {expenses
              .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.handleClick(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (payload) => dispatch(removeExpenseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
