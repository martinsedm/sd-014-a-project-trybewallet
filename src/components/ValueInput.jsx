import React from 'react';
import PropTypes from 'prop-types';

class ValueInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-value">
        Valor:
        <input
          type="text"
          name="value"
          id="input-value"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ValueInput;
