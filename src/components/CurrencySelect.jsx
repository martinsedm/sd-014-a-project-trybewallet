import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CurrencySelect extends React.Component {
  render() {
    const { currencies, currency, handleChange } = this.props;
    return (
      <label htmlFor="select-currency">
        Moeda:
        <select
          name="currency"
          id="select-currency"
          value={ currency }
          onChange={ handleChange }
        >
          {currencies.map((coin) => (
            <option key={ coin }>
              { coin }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

CurrencySelect.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(CurrencySelect);
