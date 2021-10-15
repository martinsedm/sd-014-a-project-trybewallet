import React from 'react';
import P from 'prop-types';

class Input extends React.Component {
  render() {
    const { props: { type, onChange, testId, value, name } } = this;
    return (
      <input
        type={ type }
        onChange={ onChange }
        data-testid={ testId }
        value={ value }
        name={ name }
      />
    );
  }
}

Input.propTypes = {
  type: P.string.isRequired,
  onChange: P.func.isRequired,
  testId: P.string.isRequired,
  value: P.string.isRequired,
  name: P.string.isRequired,
};

export default Input;
