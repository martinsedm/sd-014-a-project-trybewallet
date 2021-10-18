import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { id, label, options, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select onChange={ onChange } id={ id }>
          {options.map((cur) => <option key={ cur }>{cur}</option>)}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
