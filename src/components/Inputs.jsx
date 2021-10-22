import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { name, label, type, handleOnChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          name={ name }
          id={ name }
          type={ type }
          data-testid={ `${name}-input` }
          onChange={ handleOnChange }
        />
      </label>

    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // page: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Inputs;
