import React from 'react';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="despesas1">
          Tag
          <select
            type="text"
            id="despesas1"
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

Expenses.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Expenses;
