import React from 'react';
import PropTypes from 'prop-types';

class Value extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Value.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Value;
