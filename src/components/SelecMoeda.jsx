import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelecMoeda extends Component {
  render() {
    const { filtrarMoedas, currency, handleChange } = this.props;
    const moedasFiltradas = filtrarMoedas();
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" name="currency" value={ currency } onChange={ handleChange }>
          {moedasFiltradas.map((siglaMoeda) => (
            <option
              value={ siglaMoeda }
              key={ siglaMoeda }
            >
              { siglaMoeda }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelecMoeda.propTypes = {
  filtrarMoedas: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelecMoeda;
