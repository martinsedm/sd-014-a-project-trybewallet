import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputForm extends Component {
  render() {
    const { type, name, label, onChange } = this.props;
    return (
      <div>
        <label htmlFor={name}>
          {label}
          <input type='text' name={name} id={name} onChange={onChange} />
        </label>
      </div>
    );
  }
}

export default InputForm;
