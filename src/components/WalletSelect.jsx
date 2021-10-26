import React from 'react';
import PropTypes from 'prop-types';

class WalletSelect extends React.Component {
  render() {
    const { name, labelText, options, value, onChange } = this.props;
    return (
      <label htmlFor={ `expense-${name}` }>
        {labelText}
        <select
          id={ `expense-${name}` }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          { options.map(((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))) }
        </select>
      </label>
    );
  }
}

WalletSelect.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WalletSelect;
