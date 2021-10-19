import React from 'react';
import PropTypes from 'prop-types';

export default class ValueInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
