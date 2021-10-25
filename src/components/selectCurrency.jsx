import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class SelectCurrency extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        {
          currencies
            .filter((currency) => (
              currency[0] !== 'USDT'
            ))
            .map((currency) => (
              <option
                key={ currency[0] }
                value={ currency[0] }
              >
                {currency[0]}
              </option>
            )) // vi essa ideia de filter com map com a posição 0 de key no repo do Caio Amorim
        }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SelectCurrency.propTypes = {
  currencies: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func.isRequired,
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
