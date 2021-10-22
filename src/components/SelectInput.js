import React from 'react';
import propTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { nameInput, array, onChange, value, id } = this.props;
    return (
      <label htmlFor={ id }>
        { nameInput }
        <select name={ id } id={ id } value={ value } onChange={ onChange }>
          {array && array
            .filter((arr) => arr !== 'USDT')
            .map((arr, ind) => (
              <option key={ ind }>
                {
                  arr
                }
              </option>))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  nameInput: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  array: propTypes.arrayOf(String).isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default SelectInput;
