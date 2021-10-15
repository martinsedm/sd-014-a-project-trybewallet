import React from 'react';

class SelectTag extends React.Component {
  render() {
    return (
      <label htmlFor="tag-expense">
        Tag
        <select id="tag-expense">
          <option value="food">Alimentação</option>
          <option value="pleasure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="trasportation">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}

export default SelectTag;
