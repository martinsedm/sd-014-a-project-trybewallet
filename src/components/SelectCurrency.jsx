import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectCurrency extends Component {
  render() {
    const { name, id, label } = this.props;
    return (
      <form>
        <label htmlFor="currency">
          { label }
          <select
            name={ name }
            id={ id }
            // value={ currency }
            // onChange={ this.handleChange }
          >
            {/* {options.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))} */}
          </select>
        </label>
      </form>
    );
  }
}

SelectCurrency.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectCurrency;
