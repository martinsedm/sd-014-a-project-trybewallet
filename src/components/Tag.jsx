import React, { Component } from 'react';
import propTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            value={ value }
            id="tag"
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

Tag.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default Tag;
