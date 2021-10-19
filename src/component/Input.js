import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <>
        <label htmlFor="input-valor">
          Valor
          <input
            id="input-valor"
            type="number"
            name="value"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="input-descricao">
          Descrição
          <input
            id="input-descricao"
            type="text"
            name="description"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Input;
