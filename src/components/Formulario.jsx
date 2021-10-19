import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Formulario extends Component {
  render() {
    const { value, description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="despesa">
          Descrição
          <input
            type="text"
            id="despesa"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Formulario.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Formulario;
