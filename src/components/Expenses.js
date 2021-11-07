import React from 'react';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { handleChange, descrição, tag } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          Tag
          <select
            type="text"
            id="tag"
            value={ tag }
            name="tag"
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label
          htmlFor="descrição"
        >
          Descrição
          <input
            type="text"
            id="descrição"
            value={ descrição }
            name="descrição"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Expenses.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  descrição: PropTypes.string.isRequired,
};

export default Expenses;
