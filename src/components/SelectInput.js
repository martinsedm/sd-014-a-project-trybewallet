import React from 'react';
import PropTypes from 'prop-types';

export default class SelectInput extends React.Component {
  render() {
    const { lblName, name, optionsList, cb, defaultValue } = this.props;
    return (
      <label htmlFor={ name }>
        { lblName }
        <select
          name={ name }
          id={ name }
          onChange={ cb }
          defaultValue={ defaultValue }
        >
          {optionsList.map((option, i) => (
            <option
              value={ option }
              key={ `${option}-${i}` }
            >
              { option }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  optionsList: PropTypes.arrayOf(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
  lblName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  cb: PropTypes.func.isRequired,
};

SelectInput.defaultProps = {
  defaultValue: undefined,
};
