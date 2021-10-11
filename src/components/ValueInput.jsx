import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ValueInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="value" className="text-white d-flex">
        Valor:
        <input
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ onChange }
          className="form-control ms-2"
          min="0"
          step="0.01"
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
