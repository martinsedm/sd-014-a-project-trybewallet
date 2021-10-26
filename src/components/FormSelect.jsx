import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {
  render() {
    const { id, title, options, onChange, value } = this.props;
    return (
      <label htmlFor={ id }>
        { title }
        <select
          id={ id }
          className="form-control"
          name={ id }
          value={ value }
          onChange={ onChange }
        >
          { options }
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.jsx,
  onChange: PropTypes.func,
}.isRequired;

export default FormSelect;
