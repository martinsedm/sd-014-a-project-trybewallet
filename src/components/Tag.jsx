import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { name, label, onChange, value, id } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

Tag.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
};

export default Tag;
