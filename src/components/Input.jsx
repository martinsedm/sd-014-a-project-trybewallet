import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { htmlFor, text, value, handleChange, type } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { text }
        <input
          name={ htmlFor }
          data-testid={ `${htmlFor}-input` }
          value={ value }
          onChange={ handleChange }
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
