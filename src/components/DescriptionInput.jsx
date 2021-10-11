import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DescriptionInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="description" className="text-white d-flex">
        Descrição:
        <input
          type="text"
          name="description"
          id="description"
          value={ value }
          onChange={ onChange }
          className="form-control ms-2"
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
