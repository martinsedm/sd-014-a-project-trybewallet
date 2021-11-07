import React, { Component } from 'react';
import PropTypes from 'prop-types';

class inputText extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      id,
      name,
      type,
      placeholder,
      value,
      testid,
      onChange,
      label,
    } = this.props;

    return (
      <label htmlFor={ id }>
        {label}
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          data-testid={ testid }
          onChange={ onChange }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

inputText.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  testid: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
}.isRequired;

export default inputText;
