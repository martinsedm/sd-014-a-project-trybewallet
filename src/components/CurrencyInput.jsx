import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CurrencyInput extends Component {
  render() {
    const { onChange, currencies, value } = this.props;
    return (
      <label htmlFor="currency" className="text-white d-flex">
        Moeda:
        <select
          name="currency"
          id="currency"
          className="form-select ms-2"
          onChange={ onChange }
          value={ value }
        >
          { currencies.map((curr) => (
            <option value={ curr } key={ curr }>{curr}</option>
          ))}
        </select>

      </label>
    );
  }
}

CurrencyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};
