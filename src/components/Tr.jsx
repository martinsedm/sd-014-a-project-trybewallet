import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, setEditCondition } from '../actions';

class Tr extends Component {
  render() {
    const { expense, deleteExpense, editCondition } = this.props;
    const { id, description, tag, method, value, currency, exchangeRates } = expense;
    const { ask, name } = exchangeRates[currency];
    const convertedValue = value * ask;
    return (
      <tr className="border-bottom">
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
            className="btn btn-danger m-2"
            onClick={ () => deleteExpense(id) }
            type="button"
          >
            Excluir
          </button>
          <button
            type="button"
            data-testid="edit-btn"
            className="btn btn-primary m-2"
            onClick={ () => { editCondition(true, expense); } }
          >
            Editar
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
  editCondition: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expenseId) => dispatch(removeExpense(expenseId)),
  editCondition: (condition, expense) => dispatch(setEditCondition(condition, expense)),
});

export default connect(null, mapDispatchToProps)(Tr);
