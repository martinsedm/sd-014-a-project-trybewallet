import React from 'react';
import PropTypes from 'prop-types';

function ExpenseList({ expenses }) {
  return (
    <ul>
      <li>
        <div>Descrição</div>
        <div>Tag</div>
        <div>Método de Pagamento</div>
        <div>Valor</div>
        <div>Moeda</div>
        <div>Câmbio utilizado</div>
        <div>Valor Convertido</div>
        <div>Moeda de conversão</div>
      </li>
      { expenses.map(({
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      }) => {
        const { ask } = exchangeRates[currency];
        return (
          <li key={ id }>
            <div>{ description }</div>
            <div>{ tag }</div>
            <div>{ method }</div>
            <div>{ `${currency} ${value.toFixed(2)}` }</div>
            <div>{ currency }</div>
            <div>{ (+ask).toFixed(2) }</div>
            <div>{ `R$ ${(ask * value).toFixed(2)}` }</div>
            <div>Real Brasileiro</div>
          </li>
        );
      }) }
    </ul>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.string.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default ExpenseList;
