import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, onChange, options, children } = this.props;
    return (
      <label htmlFor={ name }>
        {children}
        <select
          id={ name }
          name={ name }
          onChange={ onChange }
        >
          {options.map((item) => (
            <option key={ item } value={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string.isRequired,
};

export default Select;
