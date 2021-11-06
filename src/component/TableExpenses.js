import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currencyXchanger from './currencyXchanger';

class TableExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.tableBodyMaker = this.tableBodyMaker.bind(this);
    this.expenseRowMaker = this.expenseRowMaker.bind(this);
    this.expenseToRow = this.expenseToRow.bind(this);
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
    return (
      <tr id={ id }>
        <td>{ description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{Number.parseFloat(value).toFixed(2)}</td>
        <td>{value}</td>
        <td>{currencyName}</td>
        <td>{Number.parseFloat(xchangeRate).toFixed(2)}</td>
        <td>{currencyXchanger(value, xchangeRate)}</td>
        <td>Real</td>
        <td><button type="button">Editar/Excluir</button></td>
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

TableExpenses.propTypes = { expenses: PropTypes.arrayOf(PropTypes.any).isRequired };

export default connect(mapStateToProps, null)(TableExpenses);
