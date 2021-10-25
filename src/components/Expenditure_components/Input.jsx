import React from 'react';
import PropTypes from 'prop-types';
// Modelo de compenetização : https://github.com/tryber/sd-014-a-project-trybewallet/pull/2/commits/96dde6780df21051f066a0029391efcd5fa8e505
export default class Input extends React.Component {
  render() {
    const { htmlFor, label, onChange, testid, type } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        <input
          data-testid={ testid }
          id={ htmlFor }
          name={ htmlFor }
          onChange={ onChange }
          type={ type }
        />
      </label>
    );
  }
}
Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
