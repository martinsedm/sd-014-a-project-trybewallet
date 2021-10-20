import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Imputs extends Component {
  render() {
    const { value, description, handleChange } = this.props;
    return (
      <div className="row row-cols-lg-auto g-3 align-items-center">
        <div className="col-12">
          <label htmlFor="value">
            Valor:
            <input
              className="form-control"
              type="number"
              name="value"
              id="value"
              value={ value }
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="col-12">
          <label htmlFor="description">
            Descrição:
            <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ handleChange }
            />
          </label>
        </div>
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
