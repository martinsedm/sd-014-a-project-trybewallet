import React from 'react';
import PropsTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name, onClick, disabled, label, key } = this.props;
    return (
      <button
        type="button"
        data-testid={ `${name}-btn` }
        disabled={ disabled }
        onClick={ onClick }
        key={ key }
      >
        {label}
      </button>

    );
  }
}

Button.propTypes = {
  label: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  onClick: PropsTypes.func.isRequired,
  disabled: PropsTypes.bool.isRequired,
  key: PropsTypes.number.isRequired,
};

export default Button;
