import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {
  render() {
    const { name, onChange, items, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {`${label}:`}
          <select name={ name } id={ name } onChange={ onChange }>
            { items.map((item, index) => (
              <option key={ index } value={ item }>{ item }</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

FormSelect.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}.isRequired;

export default FormSelect;
