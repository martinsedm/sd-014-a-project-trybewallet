import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select name={ name } value={ value } onChange={ onChange } id="tag">
          <option value="Lazer">Lazer</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
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
