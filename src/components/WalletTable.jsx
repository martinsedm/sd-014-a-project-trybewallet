import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class WalletTable extends React.Component {
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
        {expenses.map((expense) => {
          const {
            description, tag, method, value, currency, exchangeRates, id,
          } = expense;
          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
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

WalletTable.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProp = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProp, null)(WalletTable);
