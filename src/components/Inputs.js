import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { label, type, id, value, onChange } = this.props;
    return (
      <label
        htmlFor={ id }
      >
        { label }
        <input
          type={ type }
          id={ id }
          name={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Inputs;
