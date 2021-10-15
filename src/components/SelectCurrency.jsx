import React from 'react';

class SelectCurrency extends React.Component {
  render() {
    const { result } = this.props;
    const { USD, CAD, EUR, GBP, ARS, BTC, LTC } = result;
    const { JPY, CHF, AUD, CNY, ILS, ETH, XRP } = result;

    //  console.log(result);
    return (
      <label htmlFor="currency-select">
        Moeda
        <select id="currency-select">
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

export default SelectCurrency;
