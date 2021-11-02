import React from 'react';
import PropTypes from 'prop-types';

class SelectedCurrency extends React.Component {
  render() {
    const { text, name, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <select
          name={ name }
          id={ name }
          onChange={ onChange }
        >
          <option>exemplo</option>
        </select>
      </label>
    );
  }
}

SelectedCurrency.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SelectedCurrency;
