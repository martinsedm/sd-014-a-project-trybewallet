import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';

export default class TextInput extends Component {
  render() {
    const { label, type, name, value, onChange, placeholder, dataTestId } = this.props;
    return (
      <>
        <Label htmlFor={ name }>
          { label }
          {' '}
        </Label>
        <Input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ name }
          placeholder={ placeholder }
          data-testid={ dataTestId }
          bsSize="sm"
        />
      </>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  dataTestId: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
  dataTestId: '',
};
