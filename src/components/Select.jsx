import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { att: [htmlforname, value, text, onChange], option } = this.props;

    return (
      <label htmlFor={ htmlforname }>
        {text}
        <select
          name={ htmlforname }
          value={ value }
          id={ htmlforname }
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
