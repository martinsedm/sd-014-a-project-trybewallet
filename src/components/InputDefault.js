import React from 'react';
import PropTypes from 'prop-types';

class InputDefault extends React.Component {
  render() {
    const { nameLabel, type, id, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        {nameLabel}
        <input
          type={ type }
          id={ id }
          name={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputDefault.propTypes = {
  type: PropTypes.string.isRequired,
  nameLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputDefault;
