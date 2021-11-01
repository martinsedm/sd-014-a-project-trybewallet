import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { removeExpense as removeAction } from '../actions';

function ExpenseList({ expenses, removeExpense }) {
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
        const { ask, name } = exchangeRates[currency];
        return (
          <li key={ id }>
            <div role="cell">{ description }</div>
            <div role="cell">{ tag }</div>
            <div role="cell">{ method }</div>
            <div role="cell">{ value }</div>
            <div role="cell">{ name.split('/')[0] }</div>
            <div role="cell">{ (+ask).toFixed(2) }</div>
            <div role="cell">{ `${(ask * value).toFixed(2)}` }</div>
            <div role="cell">Real</div>
            <div role="cell">
              <Button
                text="Remover"
                testID="delete-btn"
                removeExpense={ removeExpense }
                id={ id }
              />
            </div>
          </li>
        );
      }) }
    </ul>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (payload) => dispatch(removeAction(payload)),
});

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
  removeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
