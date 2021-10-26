import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';

export default class SelectInput extends Component {
  render() {
    const { label, name, value, options, onChange } = this.props;
    return (
      <>
        <Label htmlFor={ name } className="mr-sm-2">
          { label }
          {' '}
        </Label>
        <Input
          type="select"
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ name }
          bsSize="sm"
        >
          {options.map((currency) => (
            <option key={ currency } value={ currency }>{currency}</option>
          ))}
        </Input>
      </>
    );
  }
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
