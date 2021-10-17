import React from 'react';
import P from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      props: { label, options, value, name, onChange, id },
    } = this;
    return (
      <label htmlFor={ id }>
        {label}
        <select value={ value } onChange={ onChange } id={ id } name={ name }>
          {options.map((opt, index) => (
            <option key={ index } value={ opt }>
              {opt}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: P.string.isRequired,
  options: P.arrayOf(P.string).isRequired,
  name: P.string.isRequired,
  value: P.string.isRequired,
  onChange: P.func.isRequired,
  id: P.string.isRequired,
};

export default Select;
