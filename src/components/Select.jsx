import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { htmlFor, label, onChange, testid, options } = this.props;
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
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
};
