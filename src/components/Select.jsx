import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { id, options, nomeLabel } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          {nomeLabel}
          <select name={ id } id={ id }>
            <option value=""> </option>
            {options.map((option, index) => (
              <option
                value={ option }
                key={ index }
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
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf().isRequired,
  nomeLabel: PropTypes.string.isRequired,
};

export default Select;
