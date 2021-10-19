import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { label, type, name, htmlFor, onChange, placeholder, dataTestId } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        {' '}
        <input
          type={ type }
          name={ name }
          onChange={ onChange }
          id={ htmlFor }
          placeholder={ placeholder }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  dataTestId: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  dataTestId: '',
};
