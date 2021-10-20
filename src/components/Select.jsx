import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, name, labelText, handleChange, array } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          required
          id={ id }
          name={ name }
          onChange={ handleChange }
        >
          { array.map((elem, index) => (
            <option value={ elem } key={ index }>{elem}</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  labelText: PropTypes.string,
  handleChange: PropTypes.func,
  array: PropTypes.array,
}.isRequired;

export default Select;
