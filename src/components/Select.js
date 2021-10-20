import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { label, value, type, name, onChange, id, option } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select
          value={ value }
          type={ type }
          name={ name }
          id={ id }
          onChange={ onChange }
        >
          <option>{option}</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  option: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  value: '',
  id: '',
  name: '',
  option: '',
  onChange: null,
};

export default Select;
