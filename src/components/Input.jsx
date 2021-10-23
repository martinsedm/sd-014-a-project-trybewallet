import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, nomeLabel, valueId, onChangeInput } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          {nomeLabel}
          <input
            data-testid={ `${id}-input` }
            name={ id }
            value={ valueId }
            onChange={ onChangeInput }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  nomeLabel: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Input;
