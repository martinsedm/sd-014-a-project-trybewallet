import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions';

class Currencies extends Component {
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
            .filter((currencie) => (
              currencie[0] !== 'USDT' && currencie[0] !== 'DOGE'
            ))
            .map((currencie) => (
              <option
                key={ currencie[0] }
                value={ currencie[0] }
              >
                {currencie[0]}
              </option>
            ))
        }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Currencies.propTypes = {
  currencies: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }),
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
