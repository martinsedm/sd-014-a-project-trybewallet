import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, nomeLabel, valueId, onChangeInput, type, onlyPositive,
      minNumber, name } = this.props;
    return (
      <p>
        <label htmlFor={ id }>
          {nomeLabel}
          <input
            data-testid={ `${id}-input` }
            id={ id }
            name={ name }
            value={ valueId }
            onChange={ onChangeInput }
            type={ type }
            onKeyPress={ onlyPositive }
            min={ minNumber }
          />
        </label>

      </p>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  nomeLabel: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  onlyPositive: PropTypes.string.isRequired,
  minNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
