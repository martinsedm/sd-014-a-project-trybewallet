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
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="healthCare">Saúde</option>
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
