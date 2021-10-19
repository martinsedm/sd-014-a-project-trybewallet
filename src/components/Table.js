import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateExpense } from '../actions';
import DeleteBtn from './DeleteBtn';

const tableHeaders = ['Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

class Table extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { id } }) {
    const { expenseInfo, updateExpenses } = this.props;
    const updatedExpenses = expenseInfo.filter((expense) => (expense.id) !== Number(id));
    updateExpenses(updatedExpenses);
  }

  render() {
    const { expenseInfo } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((tableHeader) => (
              <th key={ tableHeader }>{tableHeader}</th>))}
          </tr>
        </thead>
        <tbody>
          {expenseInfo.map(
            ({ id, tag, method, value, currency, description, exchangeRates }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{(exchangeRates[currency].name).split('/')[0]}</td>
                <td>{Math.ceil(exchangeRates[currency].ask * 100) / 100 }</td>
                <td>{Math.ceil(exchangeRates[currency].ask * value * 100) / 100}</td>
                <td>Real</td>
                <td><DeleteBtn idBtn={ id } handleClick={ this.handleClick } /></td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenseInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
  updateExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenseInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateExpenses: (expensesList) => dispatch(updateExpense(expensesList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
