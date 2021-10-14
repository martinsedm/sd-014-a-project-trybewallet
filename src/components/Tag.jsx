import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select name={ name } value={ value } onChange={ onChange } id="tag">
          <option value="Food">Alimentação</option>
          <option value="Leisure">Lazer</option>
          <option value="Work">Trabalho</option>
          <option value="Transport">Transporte</option>
          <option value="Health">Saúde</option>
        </select>
      </label>
    );
  }
}

export default Tag;

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
