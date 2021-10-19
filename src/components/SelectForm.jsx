import React from 'react';
import PropTypes from 'prop-types';

const SelectForm = (props) => {
  const { label, name, event, options } = props;
  return (
    <label htmlFor={ name }>
      { label }
      <select name={ name } id={ name } onChange={ event }>
        {options.map((e) => (
          <option key={ e } value={ e }>{ e }</option>)) }
      </select>
    </label>
  );
};

SelectForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  event: PropTypes.func,
  options: PropTypes.array,
}.isRequired;

export default SelectForm;
