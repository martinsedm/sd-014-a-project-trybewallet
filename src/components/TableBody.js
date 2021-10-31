import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeExpense as removeExpenseAction } from '../actions';

function TableBody({ expenses, removeExpense }) {
  return (
    <tbody>
      {expenses.map(
        ({ currency, description, exchangeRates, id, method, tag, value }) => {
          const exchangeName = exchangeRates[currency].name.split('/')[0];
          const exchangeRate = exchangeRates[currency].ask;
          const convertedValue = value * exchangeRate;

          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeName}</td>
              <td>{Math.round(exchangeRate * 100) / 100}</td>
              <td>{Math.round(convertedValue * 100) / 100}</td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => removeExpense(id) }
                  type="button"
                >
                  Excluir
                </button>
              </td>
            </tr>
          );
        },
      )}
    </tbody>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
});

TableBody.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      exchangeRates: PropTypes.objectOf(PropTypes.any).isRequired,
      id: PropTypes.number.isRequired,
      method: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TableBody);
