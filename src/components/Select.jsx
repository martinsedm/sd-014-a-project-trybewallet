import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  // https://github.com/frontendbr/forum/discussions/859
  render() {
    const { idValue, options, nomeLabel, onChangeSelect, id } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          {nomeLabel}
          <select name={ id } id={ id } value={ idValue } onChange={ onChangeSelect }>
            {/* <option value={ defaultValue }>{defaultOption}</option> */}
            {options.map((option, index) => (
              <option
                value={ option }
                key={ index }
                // selected={ option[index[0]] }
              >
                {option}

              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  idValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf().isRequired,
  nomeLabel: PropTypes.string.isRequired,
  onChangeSelect: PropTypes.string.isRequired,
};

export default Select;
