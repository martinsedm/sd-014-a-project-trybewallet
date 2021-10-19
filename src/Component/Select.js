import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { escolha, name, msg, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {msg}
        <select id={ name } name={ name } onChange={ onChange }>
          {escolha.map((item) => (
            <option
              key={ item }
              value={ item }
              name={ item }
            >
              { item }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  escolha: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
