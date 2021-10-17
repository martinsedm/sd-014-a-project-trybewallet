import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputForm extends Component {
  render() {
    const { data: [text, name, value, type, onChange] } = this.props;
    return (
      <label htmlFor={ `${name}-id` }>
        { text }
        <input
          type={ type }
          id={ `${name}-id` }
          name={ name }
          value={ value }
          onChange={ onChange }
          placeholder={ text }
          required
        />
      </label>
    );
  }
}

InputForm.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default InputForm;
