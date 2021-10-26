import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { fetchCurrenciesThunk } from '../actions';

class Currencies extends Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { handleChange, currencies } = this.props;
    const currenciesFiltered = currencies.filter((currency) => (currency !== 'USDT'));
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ handleChange }
          >
            {
              currenciesFiltered.map((currency) => (
                <option
                  key={ currency }
                  value={ currency }
                >
                  { currency }
                </option>
              ))
            }
          </select>
        </label>
      </div>
    );
  }
}

Currencies.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  handleChange: propTypes.func.isRequired,
  fetchCurrencies: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
