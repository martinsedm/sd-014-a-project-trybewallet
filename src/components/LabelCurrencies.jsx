import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../actions';

class LabelCurrencies extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency">
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
        </select>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

LabelCurrencies.propTypes = {
  currencies: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }),
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(LabelCurrencies);
