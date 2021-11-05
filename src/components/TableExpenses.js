// Informações da Tabela de Despesa

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apagarValorDespesaAction } from '../actions';

class TableExpenses extends React.Component {
  render() {
    const { expenses, apagarTabela } = this.props;
    return (
      <table>
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
        </table>
        <table>
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
                <td>
                  { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
                </td>
                <td>
                  {parseFloat(expense.value
                    * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => apagarTabela(expense.id) }
                >
                  Excluir
                </button>
              </tr>
            ))
          }
        </table>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  apagarTabela: (id) => dispatch(apagarValorDespesaAction(id)),
});

TableExpenses.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  apagarTabela: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
