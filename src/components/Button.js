import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick, children, disabled } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onClick }
          disabled={ disabled }
        >
          {children}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
