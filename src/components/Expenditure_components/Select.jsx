import React from 'react';
import PropTypes from 'prop-types';
// Modelo de compenetização : https://github.com/tryber/sd-014-a-project-trybewallet/pull/2/commits/96dde6780df21051f066a0029391efcd5fa8e505

export default class Select extends React.Component {
  render() {
    const { htmlFor, label, testid, options, onChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        <select
          data-testid={ testid }
          id={ htmlFor }
          name={ htmlFor }
          onChange={ onChange }
        >
          { options.map((opt) => <option key={ opt } value={ opt }>{ opt }</option>) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};
