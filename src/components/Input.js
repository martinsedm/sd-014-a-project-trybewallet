import React from 'react';
import PropsTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, onChange, value } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <input
          type={ type }
          name={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  onChange: PropsTypes.func.isRequired,
  value: PropsTypes.string.isRequired,
};

export default Input;
