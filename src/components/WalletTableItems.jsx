import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpenses } from '../actions';

class WalletTableItems extends Component {
  render() {
    const { expense, setRemoveExpenses } = this.props;
    const { id, value, description, currency, method, tag, exchangeRates } = expense;
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ exchangeRates[currency].name.split('/') }</td>
        <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
        <td>{ (value * exchangeRates[currency].ask).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => setRemoveExpenses(id) }
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  }
}

WalletTableItems.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRemoveExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setRemoveExpenses: (expense) => dispatch(removeExpenses(expense)),
});

export default connect(null, mapDispatchToProps)(WalletTableItems);
