import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { fetchCurrencies } from '../actions';

class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyValue: [],
    };
  }

  async setCurrencies() {
    const { currencies } = fetchCurrencies();
    this.setState({
      currencyValue: currencies,
    });
  }

  render() {
    const { currencyValue } = this.state;
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select label="currency" id="currency">
            {
              currencyValue.map((currency, index) => (
                <option
                  key={ index }
                  value={ currency[index] }
                >
                  { currency[index] }
                </option>
              ))
            }
          </select>
        </label>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {

//   };
// }

export default FetchApi;
