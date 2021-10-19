import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectCategoria extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="categoria">
          Tag
          <select
            id="categoria"
            name="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectCategoria.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default SelectCategoria;
