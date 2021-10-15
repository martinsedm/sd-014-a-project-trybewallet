import React from 'react';

class SelectTag extends React.Component {
  render() {
    const { handleChange, tag } = this.props;

    return (
      <label htmlFor="tag-expense">
        Tag
        <select id="tag-expense" onChange={ handleChange } value={ tag } name="tag">
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
