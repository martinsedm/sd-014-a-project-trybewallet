import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CurrencyInput extends Component {
  render() {
    const { currency, exchangeRates, handleChange } = this.props;

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
          { Object.values(exchangeRates).map((currencies, i) => {
            if (!currencies.name.includes('Turismo')) {
              return (
                <option key={ i }>{currencies.code}</option>
              );
            }
          })}
        </select>
      </label>
    );
  }
}

CurrencyInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default CurrencyInput;
