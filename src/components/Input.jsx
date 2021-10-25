import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { htmlFor, text, value, handleChange, type, placeholder } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { text }
        <input
          name={ htmlFor }
          data-testid={ `${htmlFor}-input` }
          value={ value }
          onChange={ handleChange }
          type={ type }
          placeHolder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  text: '',
  placeholder: '',
};

export default Input;
