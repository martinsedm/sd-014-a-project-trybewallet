import React, { Component } from 'react';
export class SelecMoeda extends Component {
  render() {
    const { filtrarMoedas, moeda, handleChange } = this.props;
    const moedasFiltradas = filtrarMoedas();
    return (
      <label htmlFor="moeda">
        Moeda
        <select name="moeda" value={ moeda } onChange={ handleChange }>
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

export default SelecMoeda;
