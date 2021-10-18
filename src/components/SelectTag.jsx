import React from 'react';
import PropTypes from 'prop-types';

class SelectTag extends React.Component {
  render() {
    const { handleChange, tag } = this.props;

    return (
      <label htmlFor="tag-expense">
        Tag
        <select id="tag-expense" onChange={ handleChange } value={ tag } name="tag">
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

SelectTag.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tag: PropTypes.string,
};

SelectTag.defaultProps = {
  tag: 'Alimentação',
};

export default SelectTag;
