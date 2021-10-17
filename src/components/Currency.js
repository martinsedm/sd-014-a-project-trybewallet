import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Currency extends React.Component {
  render() {
    const { currencies, onChange } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency" onChange={ onChange }>
          {currencies.map((currency) => (
            <option key={ currency.code } value={ currency.code }>
              {currency.code}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Currency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Currency);
