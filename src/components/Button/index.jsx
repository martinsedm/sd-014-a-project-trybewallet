import React from 'react';
import P from 'prop-types';

class Button extends React.Component {
  render() {
    const { props: { type, onClick, content, isDisabled = false } } = this;
    return (
      <button
        type={ type === 'button' ? 'button' : 'submit' }
        onClick={ onClick }
        disabled={ isDisabled }
      >
        {content}
      </button>
    );
  }
}

Button.propTypes = {
  type: P.string.isRequired,
  onClick: P.func.isRequired,
  content: P.string.isRequired,
  isDisabled: P.string.isRequired,
};

export default Button;
