import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buttons extends Component {
  render() {
    const { onClick, disabled, msg } = this.props;
    return (
      <button
        type="submit"
        disabled={ disabled }
        onClick={ onClick }
      >
        { msg }
      </button>
    );
  }
}

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Buttons;
