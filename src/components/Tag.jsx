import React, { Component } from 'react';

class Tag extends Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag">
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
