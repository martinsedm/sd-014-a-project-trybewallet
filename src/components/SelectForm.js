import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectForm extends Component {
  render() {
    const { name, options, onChange, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <select name={ name } id={ name } onChange={ onChange }>
            {options.map((item) => (
              <option key={ item } value={ item }>
                { item }
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

SelectForm.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectForm;
