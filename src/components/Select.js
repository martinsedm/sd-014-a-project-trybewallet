import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, name, options, onChange, load } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select
          name={ name }
          id={ name }
          onChange={ onChange }
        >
          { options.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { load ? 'Carregando' : option }
            </option>
          ))}
        </select>
      </label>);
  }
}
Select.defaultProps = {
  load: false,
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  load: PropTypes.bool,
};

export default Select;
