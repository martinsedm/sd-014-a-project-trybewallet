import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  setTable({ description, tag, method, value, currency, exchangeRates, id }) {
    const { setDeleteExpense } = this.props;
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
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => setDeleteExpense(id) }
          >
            Remover/Editar
          </button>
        </td>
      </tr>
    );
  }

  exchangeFormat(value) {
    return `${Number(value).toFixed(2)}`;
  }

  intoBRL(exchangeRates, currency, value) {
    return (exchangeRates[currency].ask * value);
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

const mapDispatchToProps = (dispatch) => ({
  setDeleteExpense: (id) => dispatch(deleteExpense(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDeleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
