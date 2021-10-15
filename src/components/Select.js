import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { option = [], onChange, name, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <select id={ name } name={ name } onChange={ onChange }>
            { option.map((item) => (
              <option key={ item } value={ item }>{item}</option>
            )) }
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.any).isRequired,
};
