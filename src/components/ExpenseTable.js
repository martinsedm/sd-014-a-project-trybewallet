import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteAndEdit from './DeleteAndEdit';

class ExpenseTable extends React.Component {
  constructor() {
    super();
    this.renderTableRow = this.renderTableRow.bind(this);
  }

  renderTableRow(expense) {
    const { id, value, description, currency, method, tag, exchangeRates } = expense;
    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{ exchangeRates[currency].name.replace('/Real Brasileiro', '') }</td>
        <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
        <td>{ Number(exchangeRates[currency].ask) * Number(value) }</td>
        <td>Real</td>
        <td><DeleteAndEdit id={ id } /></td>
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