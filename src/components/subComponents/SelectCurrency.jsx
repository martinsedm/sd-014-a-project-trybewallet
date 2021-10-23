import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const MAXIMUM_LENGTH = 4;

class SelectCurrency extends Component {
  constructor() {
    super();
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions() {
    const { currencies } = this.props;
    const currencyNames = Object.keys(currencies)
      .filter((currency) => currency.length < MAXIMUM_LENGTH);
    return (
      currencyNames.map((currency, index) => (
        <option value={ currency } key={ index }>
          {currency}
        </option>
      ))
    );
  }

  render() {
    const { text, name, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <select name={ name } id={ name } onChange={ onChange }>
          {this.renderOptions()}
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectCurrency);
