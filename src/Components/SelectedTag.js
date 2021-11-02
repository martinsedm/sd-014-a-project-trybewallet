import React from 'react';
import PropTypes from 'prop-types';

class SelectedTag extends React.Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name={ name }
          id="tag"
          onChange={ onChange }
          value={ value }
        >
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

SelectedTag.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectedTag;
