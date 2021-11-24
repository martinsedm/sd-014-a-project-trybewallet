import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';
import removeButton from '../images/trash-btn.svg';

class Table extends Component {
  constructor() {
    super();
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const { expenses, deleteExp } = this.props;
    return (
      expenses.map(({ tag, description, id, method, value, exchangeRates, currency }) => {
        const { name, ask } = exchangeRates[currency];
        return (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ `${currency} ${Number(value).toFixed(2)}` }</td>
            <td>{ name.split('/')[0] }</td>
            <td>{ `R$ ${Number(ask).toFixed(2)}` }</td>
            <td>{ `R$ ${(value * ask).toFixed(2)}` }</td>
            <td>{ name.split('/')[1] }</td>
            <td>
              <button
                className="button-image"
                type="button"
                value="excluir"
                data-testid="delete-btn"
                onClick={ () => deleteExp(id) }
              >
                <img src={ removeButton } alt="remove-button" className="img-trash" />
              </button>

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
          <tr className="tabel-header">
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
