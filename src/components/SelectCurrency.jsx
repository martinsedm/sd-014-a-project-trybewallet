import React from 'react';
import PropTypes from 'prop-types';

class SelectCurrency extends React.Component {
  render() {
    const { result, handleChange, currency } = this.props;
    const { USD, CAD, EUR, GBP, ARS, BTC, LTC } = result;
    const { JPY, CHF, AUD, CNY, ILS, ETH, XRP } = result;

    //  console.log(result);
    return (
      <label htmlFor="currency-select">
        Moeda
        <select
          id="currency-select"
          onChange={ handleChange }
          value={ currency }
          name="currency"
        >
          <option value={ USD.code }>{ USD.code }</option>
          <option value={ CAD.code }>{ CAD.code }</option>
          <option value={ EUR.code }>{ EUR.code }</option>
          <option value={ GBP.code }>{ GBP.code }</option>
          <option value={ ARS.code }>{ ARS.code }</option>
          <option value={ BTC.code }>{ BTC.code }</option>
          <option value={ LTC.code }>{ LTC.code }</option>
          <option value={ JPY.code }>{ JPY.code }</option>
          <option value={ CHF.code }>{ CHF.code }</option>
          <option value={ AUD.code }>{ AUD.code }</option>
          <option value={ CNY.code }>{ CNY.code }</option>
          <option value={ ILS.code }>{ ILS.code }</option>
          <option value={ ETH.code }>{ ETH.code }</option>
          <option value={ XRP.code }>{ XRP.code }</option>
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  result: PropTypes.objectOf(PropTypes.object).isRequired,
  USD: PropTypes.objectOf(PropTypes.any),
  CAD: PropTypes.objectOf(PropTypes.any),
  EUR: PropTypes.objectOf(PropTypes.any),
  GBP: PropTypes.objectOf(PropTypes.any),
  ARS: PropTypes.objectOf(PropTypes.any),
  BTC: PropTypes.objectOf(PropTypes.any),
  LTC: PropTypes.objectOf(PropTypes.any),
  JPY: PropTypes.objectOf(PropTypes.any),
  CHF: PropTypes.objectOf(PropTypes.any),
  AUD: PropTypes.objectOf(PropTypes.any),
  CNY: PropTypes.objectOf(PropTypes.any),
  ILS: PropTypes.objectOf(PropTypes.any),
  ETH: PropTypes.objectOf(PropTypes.any),
  XRP: PropTypes.objectOf(PropTypes.any),
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
};

SelectCurrency.defaultProps = {
  USD: {},
  CAD: {},
  EUR: {},
  GBP: {},
  ARS: {},
  BTC: {},
  LTC: {},
  JPY: {},
  CHF: {},
  AUD: {},
  CNY: {},
  ILS: {},
  ETH: {},
  XRP: {},
};

export default SelectCurrency;
