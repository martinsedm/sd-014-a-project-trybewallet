import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, label, options, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select onChange={ onChange } name={ name } id={ name }>
          {options.map((curr) => <option key={ curr }>{ curr }</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
