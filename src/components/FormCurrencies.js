import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormCurrencies extends Component {
  render() {
    const { currencies, handleChange } = this.props;
    return (
      <label htmlFor="coin">
        Moeda:
        <select id="coin" name="currency" onChange={ handleChange }>
          {currencies.map((e, id) => (
            <option key={ id } value={ e }>
              { e }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToprops = (state) => ({
  currencies: state.wallet.currencies,
});

FormCurrencies.propTypes = ({
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
});

export default connect(mapStateToprops)(FormCurrencies);
