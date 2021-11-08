import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteActualExpense } from '../actions';

class Table extends React.Component {
  render() {
    const { expenses, setDeleteActualExpense } = this.props;// const [expense] = expenses;
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
            <td>
              <button
                data-testid="delete-btn"
                type="button"
                onClick={ () => setDeleteActualExpense(oneExpense.id) }
              >
                Excluir
              </button>

            </td>
          </tr>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.number.isRequired,
  setDeleteActualExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,

});
const mapDispatchToProps = (dispatch) => ({
  setDeleteActualExpense: (id) => { dispatch(deleteActualExpense(id)); },
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
