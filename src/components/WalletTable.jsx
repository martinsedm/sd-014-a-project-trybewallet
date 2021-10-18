import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
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
        {expenses.map((item) => {
          const { description, tag, method, value, currency, exchangeRates, id } = item;
          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}</td>
              <td>Real</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

const mapStateToProp = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProp)(WalletTable);

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};
