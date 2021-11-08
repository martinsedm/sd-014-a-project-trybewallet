import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  intoBRL(exchangeRates, currency, value) {
    return (exchangeRates[currency].ask * value);
  }

  setTable({ description, tag, method, value, currency, exchangeRates, id }) {
    return (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ exchangeRates[currency].name.split('/')[0] }</td>
        <td>{ this.exchangeFormat(exchangeRates[currency].ask) }</td>
        <td>
          {
            this.exchangeFormat(this.intoBRL(
              exchangeRates, currency, value,
            ))
          }
        </td>
        <td>Real</td>
      </tr>
    );
  }

  exchangeFormat(value) {
    return `${Number(value).toFixed(2)}`;
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
          {expenses.map((expense) => this.setTable(expense))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
