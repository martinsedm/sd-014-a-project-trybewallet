import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectForm extends Component {
  render() {
    const { data: [text, name, value, options, callback] } = this.props;
    return (
      <label htmlFor={ `${name}-id` }>
        { text }
        <select
          id={ `${name}-id` }
          name={ name }
          value={ value }
          onChange={ callback }
        >
          { options.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectForm.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelectForm;
