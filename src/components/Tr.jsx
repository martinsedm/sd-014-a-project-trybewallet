import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteExpense as deleteExpenseAction } from '../actions';

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
        <td>{name.split('/'[0])}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{Number(convertedValue).toFixed(2)}</td>
        <td>Real</td>
        <td>
          {' '}
          <button
            value={ Number(convertedValue).toFixed(2) }
            name={ id }
            data-testid="delete-btn"
            onClick={ (e) => deleteExpense(e.target.name, e.target.value) }
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
  deleteExpense: PropTypes.func.isRequired,
  expense: PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string,
      name: PropTypes.string,
    }),
    id: PropTypes.number,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expId, expValue) => dispatch(deleteExpenseAction(expId, expValue)),
});
export default connect(null, mapDispatchToProps)(Tr);
