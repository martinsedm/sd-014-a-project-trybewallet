import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionSelect extends Component {
  render() {
    const { option } = this.props;
    return (
      <option>{option}</option>
    );
  }
}

OptionSelect.propTypes = {
  option: PropTypes.string.isRequired,
};

export default OptionSelect;
