import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { type, text, disabled } = this.props;
    return (
      <button
        type={ type === 'submit' ? 'submit' : 'button' }
        disabled={ disabled }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
