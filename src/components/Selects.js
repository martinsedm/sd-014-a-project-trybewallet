import React from 'react';
import PropTypes from 'prop-types';

class Selects extends React.Component {
  render() {
    const { label, array, onChange, value, id } = this.props;
    return (
      <label
        htmlFor={ id }
      >
        { label }
        <select
          name={ id }
          id={ id }
          value={ value }
          onChange={ onChange }
        >
          { array && array.filter((arr) => arr !== 'USDT').map((arr, indice) => (
            <option
              key={ indice }
            >
              { arr }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Selects.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  array: PropTypes.arrayOf(String),
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Selects;
