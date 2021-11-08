import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    const [expense] = expenses;

    console.log(expense, 'expense');
    // console.log(expenses, 'expenses');

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
        { expenses.map((oneExpense) => (
          <tr key={ oneExpense.id }>
            <td>{ oneExpense.description }</td>
            <td>{ oneExpense.tag }</td>
            <td>{ oneExpense.method }</td>
            <td>{ oneExpense.value }</td>
            <td>
              {oneExpense.exchangeRates[oneExpense.currency]
                .name.split('/')[0]}

            </td>
            <td>
              {Math.round(oneExpense.exchangeRates[oneExpense.currency]
                .ask * 100) / 100}
            </td>
            <td>
              { Math.round(oneExpense.value
              * oneExpense.exchangeRates[oneExpense.currency].ask * 100)
               / 100 }
            </td>
            <td>Real</td>
            <td>Excluir</td>
          </tr>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);

// {
//   "expense": {
//     "id": 1,
//     "value": "2200",
//     "description": "asdsad",
//     "currency": "USD",
//     "method": "Dinheiro",
//     "tag": "Alimentação",
//     "exchangeRates": ""
//   },
