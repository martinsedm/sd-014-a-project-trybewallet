import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpense extends React.Component {
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
        { expenses.map((expense) => {
          const { id, value, currency, method,
            tag, description, exchangeRates } = expense;
          const atualCurrencyValue = Number(exchangeRates[currency].ask);
          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{atualCurrencyValue.toFixed(2)}</td>
              <td>{atualCurrencyValue * value}</td>
              <td>Real</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

TableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpense);
