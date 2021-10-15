import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Imputs extends Component {
  render() {
    const { valor, descricao, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="valor"
            id="valor"
            value={ valor }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="descricao"
            id="descricao"
            value={ descricao }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Imputs.propTypes = {
  valor: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Imputs;
