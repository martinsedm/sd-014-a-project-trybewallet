import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import OptionSelect from '../componentsGeneric/OptionSelect';

class Select extends Component {
  render() {
    const { value, name, textLabel, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { textLabel }
        <select
          value={ value }
          name={ name }
          id={ name }
          onChange={ onChange }
        >
          {// options.map(())

          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
