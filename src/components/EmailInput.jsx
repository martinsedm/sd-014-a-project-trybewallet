import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EmailInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        type="text"
        name="email"
        value={ value }
        onChange={ onChange }
        placeholder="Email"
        className="form-control"
        data-testid="email-input"
      />
    );
  }
}

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
