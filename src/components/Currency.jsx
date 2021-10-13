import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Currency extends Component {
  render() {
    const { currency } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency">
          {currency ? currency.map((ele) => (
            <option key={ ele } value={ `${ele}` }>
              {ele}
            </option>
          ))
            : 'Nenhuma moeda disponível'}
        </select>
      </label>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.wallet.currency,
  };
}

export default connect(mapStateToProps)(Currency);

Currency.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.any).isRequired,
};
