import React from 'react';
import PropTypes from 'prop-types';

class FormSelect extends React.Component {
  render() {
    const { id, infoArray, onChange, label, value } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          name={ id }
          onChange={ onChange }
          value={ value }
          id={ id }
        >
          { infoArray.map((info) => (
            <option
              key={ info }
              value={ info }
            >
              { info }
            </option>))}
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  infoArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormSelect;
