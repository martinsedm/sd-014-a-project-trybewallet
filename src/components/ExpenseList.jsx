import React from 'react';
import PropTypes from 'prop-types';

function ExpenseList({ expenses }) {
  return (
    <ul>
      <li>
        <div role="columnheader">Descrição</div>
        <div role="columnheader">Tag</div>
        <div role="columnheader">Método de pagamento</div>
        <div role="columnheader">Valor</div>
        <div role="columnheader">Moeda</div>
        <div role="columnheader">Câmbio utilizado</div>
        <div role="columnheader">Valor convertido</div>
        <div role="columnheader">Moeda de conversão</div>
        <div role="columnheader">Editar/Excluir</div>

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
            <div>{ `${currency} ${(+value).toFixed(2)}` }</div>
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
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape({}).isRequired,
  })).isRequired,
};

export default ExpenseList;
