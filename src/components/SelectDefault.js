import React from 'react';
import propTypes from 'prop-types';

class SelectDefault extends React.Component {
  render() {
    const { nameLabel, array, onChange, value, id } = this.props;
    return (
      <label htmlFor={ id }>
        { nameLabel }
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

SelectDefault.propTypes = {
  nameLabel: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  array: propTypes.arrayOf(String).isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default SelectDefault;
