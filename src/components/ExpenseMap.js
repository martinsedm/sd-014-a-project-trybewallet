import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseMap extends Component {
  render() {
    const { currency, handleChange, stateMoeda } = this.props;
    // const currencies = Object.values(exchangeRates).reduce((acc, crr) => {
    //   if (!crr.name.includes('Turismo')) acc.push(crr.code);
    //   return acc;
    // }, []);
    console.log(stateMoeda);
    const arrayArray = Object.keys(stateMoeda);
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ handleChange }
        >
          { arrayArray.map((array) => (
            <option key={ array }>{array}</option>
          )) }
        </select>
      </label>
    );
  }
}

ExpenseMap.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  stateMoeda: PropTypes.arrayOf.isRequired,
  // exchangeRates: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  stateMoeda: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(ExpenseMap);
