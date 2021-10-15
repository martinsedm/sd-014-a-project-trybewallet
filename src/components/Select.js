import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { option = [], onChange, name } = this.props;
    const { children } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {children}
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
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.any).isRequired,
};
