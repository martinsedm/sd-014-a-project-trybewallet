import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Formulario extends Component {
  render() {
    const { valor, despesa, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
            name="valor"
            value={ valor }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="despesa">
          Descr. despesa:
          <input
            type="text"
            id="despesa"
            name="despesa"
            value={ despesa }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Formulario.propTypes = {
  despesa: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Formulario;
