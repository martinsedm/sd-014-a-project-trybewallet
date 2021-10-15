import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectTag extends Component {
  render() {
    const { name, id, label } = this.props;
    return (
      <form>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            // value={ payment }
            // onChange={ this.handleChange }
          >
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SelectTag;
