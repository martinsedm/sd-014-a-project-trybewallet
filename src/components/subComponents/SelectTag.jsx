import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectTag extends Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label htmlFor="tag-select">
        Tag
        <select name={ name } id="tag-select" onChange={ onChange } value={ value }>
          <option value="Lazer">Lazer</option>
          <option value="Transporte">Transporte</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Saúde">Saúde</option>
          <option value="Alimentação">Alimentação</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectTag;
