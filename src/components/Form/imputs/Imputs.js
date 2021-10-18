import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Imputs extends Component {
  render() {
    const { value, description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Imputs.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Imputs;
