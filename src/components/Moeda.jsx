import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Moeda extends Component {
  render() {
    const { change, moedas, value } = this.props;
    return (
      <label htmlFor="moeda">
        {'Moeda: '}
        <select name="moeda" id="moeda" onChange={ change } value={ value }>
          {moedas.map((moeda, index) => (
            <option key={ index }>{moeda}</option>
          ))}
        </select>
      </label>
    );
  }
}

Moeda.propTypes = {
  change: PropTypes.func,
  moedas: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

export default Moeda;
