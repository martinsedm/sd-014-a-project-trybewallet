import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Selector extends Component {
  render() {
    const { labelText, id, ariaLabel, onChange, currencies, value } = this.props;
    return (
      <label htmlFor={ id }>
        {labelText}
        <select value={ value } onChange={ onChange } aria-label={ ariaLabel } id={ id }>
          {Object.keys(currencies)
            .map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
        </select>
      </label>
    );
  }
}

Selector.propTypes = {
  labelText: PropTypes.string,
}.isRequired;

export default Selector;
