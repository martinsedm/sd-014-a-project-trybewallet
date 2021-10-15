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
        <select id="currency-select" onChange={ handleChange } value={ currency } name="currency">
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
  USD: PropTypes.objectOf(PropTypes.any).isRequired,
  CAD: PropTypes.objectOf(PropTypes.any).isRequired,
  EUR: PropTypes.objectOf(PropTypes.any).isRequired,
  GBP: PropTypes.objectOf(PropTypes.any).isRequired,
  ARS: PropTypes.objectOf(PropTypes.any).isRequired,
  BTC: PropTypes.objectOf(PropTypes.any).isRequired,
  LTC: PropTypes.objectOf(PropTypes.any).isRequired,
  JPY: PropTypes.objectOf(PropTypes.any).isRequired,
  CHF: PropTypes.objectOf(PropTypes.any).isRequired,
  AUD: PropTypes.objectOf(PropTypes.any).isRequired,
  CNY: PropTypes.objectOf(PropTypes.any).isRequired,
  ILS: PropTypes.objectOf(PropTypes.any).isRequired,
  ETH: PropTypes.objectOf(PropTypes.any).isRequired,
  XRP: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelectCurrency;
