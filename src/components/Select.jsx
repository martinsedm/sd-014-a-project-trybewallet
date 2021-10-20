import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { htmlFor, label, onChange, options, value } = this.props;
    return (
      <p>
        <label htmlFor={ htmlFor }>
          {label}
          <select id={ htmlFor } name={ htmlFor } onChange={ onChange } value={ value }>
            {options.map((opt) => (
              <option key={ opt } value={ opt }>
                {opt}
              </option>
            ))}
          </select>
        </label>
      </p>
    );
  }
}

Select.defaultProps = {
  value: undefined,
};

Select.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  value: PropTypes.string,
};

export default Select;
