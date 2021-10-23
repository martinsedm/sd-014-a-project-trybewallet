import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { value, onChange, description } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            value={ value }
            type="number"
            name="value"
            id="value"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            value={ description }
            type="text"
            name="description"
            id="description"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}
Input.propTypes = {
  value: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  description: '',
  onChange: null,
};

export default Input;
