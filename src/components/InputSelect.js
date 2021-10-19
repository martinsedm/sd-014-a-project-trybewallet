import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputSelect extends Component {
  render() {
    const { label, name, value, handleChange, data } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <select
            id={ name }
            type="select"
            name={ name }
            value={ value }
            onChange={ handleChange }
          >
            {data()}
          </select>
        </label>
      </div>
    );
  }
}

InputSelect.propTypes = {
  data: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputSelect;
