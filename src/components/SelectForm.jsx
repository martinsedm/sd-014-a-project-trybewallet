import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectForm extends Component {
  render() {
    const { name, type, change, options } = this.props;
    return (
      <label htmlFor={ name }>
        { `${type}:` }
        <select
          name={ name }
          id={ name }
          onChange={ change }
        >
          {options.map((option) => (
            <option value={ option } key={ option }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
