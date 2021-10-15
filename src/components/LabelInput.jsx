import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelInput extends Component {
  render() {
    const { att } = this.props;
    const [htmlforNameId, labelText, type, value, onChange] = att;

    return (
      <label htmlFor={ htmlforNameId }>
        { labelText }
        <input
          type={ type }
          name={ htmlforNameId }
          value={ value }
          id={ htmlforNameId }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LabelInput.propTypes = {
  att: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default LabelInput;
