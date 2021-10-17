import React from 'react';
import P from 'prop-types';

class Input extends React.Component {
  render() {
    const { props: { label, type, onChange, testId, value, name } } = this;
    return (
      <label htmlFor={ testId }>
        {label}
        <input
          type={ type }
          onChange={ onChange }
          data-testid={ testId }
          value={ value }
          name={ name }
          id={ testId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: P.string.isRequired,
  onChange: P.func.isRequired,
  testId: P.string.isRequired,
  value: P.string.isRequired,
  name: P.string.isRequired,
  label: P.string.isRequired,
};

export default Input;
