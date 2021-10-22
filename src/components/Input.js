import React from 'react';
import propTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, nameInput, onChange, value, id } = this.props;
    return (
      <label htmlFor={ id }>
        { nameInput }
        <input
          type={ type }
          name={ id }
          id={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: propTypes.string.isRequired,
  nameInput: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default Input;
