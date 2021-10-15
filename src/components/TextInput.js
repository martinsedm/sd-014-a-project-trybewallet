import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { name, value, cb, lblName } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ name }>
        { lblName }
        <input
          id={ name }
          name={ name }
          data-testid={ `${name}-input` }
          type="text"
          value={ value }
          onChange={ cb }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  cb: PropTypes.func.isRequired,
  lblName: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  value: '',
};

export default TextInput;
