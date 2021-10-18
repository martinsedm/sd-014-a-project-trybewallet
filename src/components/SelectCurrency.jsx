import PropTypes from 'prop-types';
import React from 'react';

class SelectCurrency extends React.Component {
  render() {
    const { currency } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
        >
          <option>BRL</option>
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default SelectCurrency;
