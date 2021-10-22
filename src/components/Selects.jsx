import React from 'react';
import PropTypes from 'prop-types';

class Selects extends React.Component {
  render() {
    const { name, label, handleOnChange, options } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select
          name={ name }
          id={ name }
          onChange={ handleOnChange }
        >
          {options.map((moedaOpt, i) => (
            <option key={ i }>{moedaOpt}</option>))}
        </select>
      </label>
    );
  }
}

Selects.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Selects;
