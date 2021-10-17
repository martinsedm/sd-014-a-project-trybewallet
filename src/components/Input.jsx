import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, onChange, id, name, value, TextLabel, testId } = this.props;
    return (
      <label htmlFor={ id }>
        {TextLabel}
        <input
          type={ type }
          onChange={ onChange }
          id={ id }
          name={ name }
          value={ value }
          data-testid={ testId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  TextLabel: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Input;
