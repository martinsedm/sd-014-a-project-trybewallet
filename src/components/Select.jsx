import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      id,
      label,
      name,
      onChange,
      options,
    } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select name={ name } onChange={ onChange } id={ id }>
          <option value="default">Escolha uma opção...</option>
          { options.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
