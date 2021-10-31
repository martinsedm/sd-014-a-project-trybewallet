import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({ expenses }) {
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
                <button type="button">Excluir</button>
              </td>
            </tr>
          );
        },
      )}
    </tbody>
  );
}

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
};
