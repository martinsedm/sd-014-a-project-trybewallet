import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WalletSelect extends Component {
  render() {
    const { name, labelText, options, value, xablau } = this.props;
    return (
      <label htmlFor={ `select-${name}` }>
        {labelText}
        <select
          name={ name }
          id={ `select-${name}` }
          value={ value }
          onChange={ xablau }
        >
          { options.map(((option) => (
            <option key={ option } value={ option }>{option}</option>
          )))}
        </select>
      </label>
    );
  }
}

WalletSelect.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  xablau: PropTypes.func.isRequired,
};
