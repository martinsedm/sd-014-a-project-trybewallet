import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { att: [id, value, label, onChange], option } = this.props;

    return (
      <label htmlFor={ id }>
        {label}
        <select
          name={ id }
          value={ value }
          id={ id }
          onChange={ onChange }
        >
          {option.map((item) => (
            <option key={ item } id={ item }>{item}</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  att: PropTypes.arrayOf(PropTypes.shape).isRequired,
  option: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Select;
