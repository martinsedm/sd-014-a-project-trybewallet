import React from 'react';
import PropTypes from 'prop-types';

class WalletInput extends React.Component {
  render() {
    const { name, type, labelText, value, onChange } = this.props;
    return (
      <label htmlFor={ `expense-${name}` }>
        {labelText}
        <input
          type={ type }
          id={ `expense-${name}` }
          name={ name }
          required
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

WalletInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

WalletInput.defaultProps = {
  type: 'text',
};

export default WalletInput;
