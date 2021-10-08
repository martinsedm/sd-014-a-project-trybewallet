import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class Tr extends Component {
  render() {
    const { expense, deleteExpense } = this.props;
    const { id, description, tag, method, value, currency, exchangeRates } = expense;
    const { ask, name } = exchangeRates[currency];
    const convertedValue = value * ask;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{name.split('/')[0]}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{Number(convertedValue).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            data-testid="delete-btn"
            onClick={ () => deleteExpense(id) }
            type="button"
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

Tr.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expenseId) => dispatch(removeExpense(expenseId)),
});

export default connect(null, mapDispatchToProps)(Tr);
