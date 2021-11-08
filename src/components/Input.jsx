import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type = 'text', value, onChange, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            name={ name }
            type={ type }
            value={ value }
            onChange={ onChange }
            data-testid={ `${name}-input` }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
