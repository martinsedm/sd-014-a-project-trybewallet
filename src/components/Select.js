import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { id, name, handleClick, value, arry, labelName } = this.props;
    return (
      <label htmlFor={ id }>
        { labelName }
        <select
          id={ id }
          name={ name }
          onChange={ handleClick }
          value={ value }
        >
          {arry.map((item) => (
            <option key={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  arry: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelName: PropTypes.string.isRequired,
};

export default Select;
