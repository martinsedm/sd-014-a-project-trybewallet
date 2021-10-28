import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, label, type, name, value, onChange } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          id={ id }
          name={ name }
          onChange={ onChange }
          value={ value }
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
