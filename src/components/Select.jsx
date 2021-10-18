import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { att, option } = this.props;
    const [htmlfornameId, value, text, onChange] = att;

    return (
      <label htmlFor={ htmlfornameId }>
        {text}
        <select
          name={ htmlfornameId }
          value={ value }
          id={ htmlfornameId }
          onChange={ onChange }
        >
          {option.map((item) => (
            <option key={ item } id={ item }>{item}</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  att: PropTypes.arrayOf(PropTypes.shape).isRequired,
  option: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Select;
