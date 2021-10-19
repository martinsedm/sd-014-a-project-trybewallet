import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseMap extends Component {
  render() {
    const { currency, handleChange, exchangeRates } = this.props;
    const currencies = Object.values(exchangeRates).reduce((acc, crr) => {
      if (!crr.name.includes('Turismo')) acc.push(crr.code);
      return acc;
    }, []);
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ handleChange }
        >
          <option value="" disabled hidden>Moeda</option>
          { currencies.map((currencyCode, i) => (
            <option key={ i } value={ currencyCode }>{currencyCode}</option>
          )) }
        </select>
      </label>
    );
  }
}

ExpenseMap.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseMap);
