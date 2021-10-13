import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGen extends Component {
  render() {
    const { config } = this.props;
    const [type, name, dataTestId, value, checked, onChange, labelText,
      className] = config;

    if (checked === false) {
      return (
        <label htmlFor={ dataTestId } data-testid={ `${dataTestId}-label` }>
          { labelText }
          <input
            type={ type }
            name={ name }
            id={ dataTestId }
            data-testid={ dataTestId }
            value={ value }
            onChange={ onChange }
            className={ className }
          />
        </label>
      );
    }
    if (type === 'textarea') {
      return (
        <textarea
          id="story"
          name={ name }
          dataTestId={ dataTestId }
          value={ value }
          onChange={ onChange }
        />
      );
    }
    return (
      <label htmlFor={ dataTestId } data-testid={ `${dataTestId}-label` }>
        { labelText }
        <input
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          checked={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputGen.propTypes = {
  config: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.number,
    PropTypes.bool,
  ])).isRequired,
};

export default InputGen;
