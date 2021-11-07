import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Consultei: https://blog.betrybe.com/html/table-html/
// Consultei: https://blog.betrybe.com/javascript/javascript-split/
// Consultei: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
// Consultei: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;

    return (
      <section>
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
          {expenses.map(({
            id,
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates,
          }) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              <td>Real</td>
            </tr>
          ))}
        </table>
      </section>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
