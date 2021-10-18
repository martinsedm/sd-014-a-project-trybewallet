import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpenses extends React.Component {
  renderExpenses() {
    const { expenses } = this.props;
    return expenses.map((expense) => {
      const { description, tag, method, value, currency, exchangeRates, id } = expense;
      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ exchangeRates[currency].name.split('/')[0] }</td>
          <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
          <td>{ (exchangeRates[currency].ask * value).toFixed(2) }</td>
          <td>Real</td>
        </tr>
      );
    });
  }

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
        { /*  console.log(expenses) */ }
        { /*  console.log(expenses.length)  */ }
        { expenses.length >= 1 && this.renderExpenses() }
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

TableExpenses.defaultProps = {
  expenses: [{}],
};

export default connect(mapStateToProps, null)(TableExpenses);
