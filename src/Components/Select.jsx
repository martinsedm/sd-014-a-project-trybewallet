import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { values, id, onChange, labelText } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select id={ id } name={ id } onChange={ onChange }>
          { values.map((value) => (
            <option key={ value } value={ value }>{ value }</option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  values: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};
