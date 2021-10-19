import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CurrencySelect extends React.Component {
  render() {
    const { currencies, onChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          onChange={ onChange }
        >
          {currencies.map((currency) => (
            <option key={ currency }>
              { currency }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

CurrencySelect.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CurrencySelect);
