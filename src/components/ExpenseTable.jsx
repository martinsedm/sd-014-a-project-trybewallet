import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseTable extends React.Component {
  constructor() {
    super();
    this.renderTableRow = this.renderTableRow.bind(this);
  }

  renderTableRow(expense) {
    const { value, description, currency, method, tag, exchangeRates } = expense;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        {/* <td>{`${currency} ${value}`}</td> */}
        <td>{value}</td>
        <td>{ exchangeRates[currency].name.replace('/Real Brasileiro', '') }</td>
        <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
        <td>{ Number(exchangeRates[currency].ask) * Number(value) }</td>
        <td>Real</td>
        <td>botoes</td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
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
          {expenses.map(this.renderTableRow)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
