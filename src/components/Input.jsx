import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, name, labelText, handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        <span>
          { labelText }
        </span>
        <input
          className="rounded"
          required
          type="text"
          id={ id }
          name={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Input;
