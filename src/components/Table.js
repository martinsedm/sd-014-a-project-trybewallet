import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const { expenses, deleteExp } = this.props;
    // `${currency} ${Number(value).toFixed(2)}`
    return (
      expenses.map(({ tag, description, id, method, value, exchangeRates, currency }) => {
        const { name, ask } = exchangeRates[currency];
        return (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ Number(value) }</td>
            <td>{ name.split('/')[0] }</td>
            <td>{ Number(ask).toFixed(2) }</td>
            <td>{ (value * ask).toFixed(2) }</td>
            <td>Real</td>
            <td>
              <input
                type="button"
                value="excluir"
                data-testid="delete-btn"
                onClick={ () => deleteExp(id) }
              />

            </td>
          </tr>
        );
      })
    );
  }

  render() {
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
          {this.renderTable()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
