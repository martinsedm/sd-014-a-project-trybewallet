import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import currencyXchanger from './CurrencyExchange';
import './ExpensesTable.css';
import filterXpenses from './ExpenseManager';
import { overwriteXpenses } from '../actions';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableBodyMaker = this.tableBodyMaker.bind(this);
    this.expenseRowMaker = this.expenseRowMaker.bind(this);
    this.expenseToRow = this.expenseToRow.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { expenses, newDispatch } = this.props;
    const filterMyExpenses = filterXpenses(expenses, target.name);
    newDispatch(filterMyExpenses);
  }

  expenseToRow() {
    const { expenses } = this.props;
    return expenses.map((xpense) => (
      this.expenseRowMaker(xpense)
    ));
  }

  expenseRowMaker(contentObj) {
    const { id, description, tag, method, value, currency, exchangeRates } = contentObj;
    const currencyName = exchangeRates[currency].name.replace('/Real Brasileiro', '');
    const xchangeRate = exchangeRates[currency].ask;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    return (
      <tr id={ id }>
        <td>{ description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{currencyName}</td>
        <td>{Number.parseFloat(xchangeRate).toFixed(2)}</td>
        <td>{currencyXchanger(value, xchangeRate)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            name={id}
            onClick={this.handleClick}
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }

  tableBodyMaker() {
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
          {this.expenseToRow()}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <br />
        Table
        <br />
        <this.tableBodyMaker />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  newDispatch: (payload) => dispatch(overwriteXpenses(payload))
});

ExpensesTable.propTypes = { 
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  newDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
